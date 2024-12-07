import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react';
import { TaskManagerView } from '../TaskManagerView';
import { Providers } from '../../../test-helpers/Providers';
import { createServer, Registry, Response, Server } from 'miragejs';
import { AnyFactories, AnyModels } from 'miragejs/-types';
import chuckNorrisResponseData from './data/chuck-norris-data.json';

const chuckNorrisApiUrl = 'https://api.chucknorris.io/jokes/random';

const mockEnqueue = jest.fn();

jest.mock('notistack', () => ({
  ...jest.requireActual('notistack'),
  useSnackbar: () => {
    return {
      enqueueSnackbar: mockEnqueue,
    };
  },
}));
describe('TaskManagerView', () => {
  let mockServerInstance: Server<Registry<AnyModels, AnyFactories>> | null =
    null;
  beforeEach(() => {
    mockServerInstance = createServer({
      routes() {
        this.timing = 0;
        this.logging = false;
      },
    });
  });
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
    if (mockServerInstance) {
      mockServerInstance.shutdown();
      mockServerInstance = null;
    }
  });
  it('renders', () => {
    render(
      <Providers>
        <TaskManagerView />
      </Providers>,
    );
  });

  it('does not add text task', () => {
    render(
      <Providers>
        <TaskManagerView />
      </Providers>,
    );

    const newTaskInput = screen.getByRole('textbox', {
      name: /add a new task/i,
    });
    const addBtn = screen.getByTestId('AddCircleOutlineIcon');

    fireEvent.change(newTaskInput, {
      target: {
        value: ' ',
      },
    });

    fireEvent.click(addBtn);
    expect(screen.queryByText(' ')).not.toBeInTheDocument();
  });
  it('adds task successfully', () => {
    render(
      <Providers>
        <TaskManagerView />
      </Providers>,
    );

    const newTaskInput = screen.getByRole('textbox', {
      name: /add a new task/i,
    });
    const addBtn = screen.getByTestId('AddCircleOutlineIcon');

    fireEvent.change(newTaskInput, {
      target: {
        value: 'something to do',
      },
    });

    fireEvent.click(addBtn);

    expect(screen.getByText(/something to do/i)).toBeInTheDocument();

    // TODO: fix clean up
    const deleteBtn = screen.getByTestId('DeleteIcon');
    fireEvent.click(deleteBtn);
  });
  it('deletes task successfully', () => {
    render(
      <Providers>
        <TaskManagerView />
      </Providers>,
    );

    const newTaskInput = screen.getByRole('textbox', {
      name: /add a new task/i,
    });
    const addBtn = screen.getByTestId('AddCircleOutlineIcon');

    fireEvent.change(newTaskInput, {
      target: {
        value: 'something to do',
      },
    });

    fireEvent.click(addBtn);

    expect(screen.getByText(/something to do/i)).toBeInTheDocument();

    const deleteBtn = screen.getByTestId('DeleteIcon');
    fireEvent.click(deleteBtn);

    expect(screen.queryByText(/something to do/i)).not.toBeInTheDocument();
  });
  it('edits task successfully', () => {
    render(
      <Providers>
        <TaskManagerView />
      </Providers>,
    );

    const newTaskInput = screen.getByRole('textbox', {
      name: /add a new task/i,
    });
    const addBtn = screen.getByTestId('AddCircleOutlineIcon');

    fireEvent.change(newTaskInput, {
      target: {
        value: 'something to do',
      },
    });

    fireEvent.click(addBtn);
    expect(screen.getByText(/something to do/i)).toBeInTheDocument();

    const editBtn = screen.getByTestId('EditIcon');
    fireEvent.click(editBtn);

    const saveBtn = screen.getByTestId('SaveIcon');
    expect(saveBtn).toBeInTheDocument();

    const editTaskView = screen.getByTestId('edit-field-something to do');
    const editTaskInput = within(editTaskView).getByRole('textbox');
    fireEvent.change(editTaskInput, {
      target: { value: 'something' },
    });

    fireEvent.click(saveBtn);
    expect(screen.queryByText(/something to do/i)).not.toBeInTheDocument();

    // TODO: fix clean up
    const deleteBtn = screen.getByTestId('DeleteIcon');
    fireEvent.click(deleteBtn);
  });
  it('marks task as done successfully', async () => {
    render(
      <Providers>
        <TaskManagerView />
      </Providers>,
    );

    const newTaskInput = screen.getByRole('textbox', {
      name: /add a new task/i,
    });
    const addBtn = screen.getByTestId('AddCircleOutlineIcon');

    fireEvent.change(newTaskInput, {
      target: {
        value: 'something to do',
      },
    });

    fireEvent.click(addBtn);

    expect(screen.getByText(/something to do/i)).toBeInTheDocument();

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    const filterSelect = screen.getByRole('combobox');
    fireEvent.mouseDown(filterSelect);

    const pendingOption = await screen.findByRole('option', {
      name: /pending/i,
    });

    fireEvent.click(pendingOption);
    expect(screen.queryByText(/something to do/i)).not.toBeInTheDocument();

    fireEvent.mouseDown(filterSelect);
    const doneOption = await screen.findByRole('option', {
      name: /done/i,
    });

    fireEvent.click(doneOption);
    expect(screen.queryByText(/something to do/i)).toBeInTheDocument();
  });
  it('renders a joke when bored button is clicked', async () => {
    if (mockServerInstance) {
      mockServerInstance.get(chuckNorrisApiUrl, () => {
        return chuckNorrisResponseData;
      });
    }

    render(
      <Providers>
        <TaskManagerView />
      </Providers>,
    );
    const boredBtn = screen.getByRole('button', {
      name: /bored\?/i,
    });

    fireEvent.click(boredBtn);

    await waitFor(() => {
      expect(mockEnqueue).toHaveBeenCalledWith(chuckNorrisResponseData.value, {
        variant: 'success',
        autoHideDuration: 5000,
        anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
      });
    });
  });
  it('renders an error notification when failing to fetch a joke', async () => {
    if (mockServerInstance) {
      mockServerInstance.get(chuckNorrisApiUrl, () => {
        return new Response(400, undefined, undefined);
      });
    }

    render(
      <Providers>
        <TaskManagerView />
      </Providers>,
    );
    const boredBtn = screen.getByRole('button', {
      name: /bored\?/i,
    });

    fireEvent.click(boredBtn);

    await waitFor(() => {
      expect(mockEnqueue).toHaveBeenCalledWith(
        'Error while fetching Chuck Norris joke',
        {
          variant: 'error',
          autoHideDuration: 5000,
          anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
        },
      );
    });
  });
});
