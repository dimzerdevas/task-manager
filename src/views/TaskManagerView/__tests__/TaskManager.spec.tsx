import { fireEvent, render, screen, within } from "@testing-library/react";
import { TaskManagerView } from "../TaskManagerView";
import { Providers } from "../../../test-helpers/Providers";

describe("TaskManagerView", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  it("renders", () => {
    render(
      <Providers>
        <TaskManagerView />
      </Providers>
    );
  });

  it("adds task successfully", () => {
    render(
      <Providers>
        <TaskManagerView />
      </Providers>
    );

    const newTaskInput = screen.getByRole("textbox", {
      name: /add a new task/i,
    });
    const addBtn = screen.getByTestId("AddCircleOutlineIcon");

    fireEvent.change(newTaskInput, {
      target: {
        value: "something to do",
      },
    });

    fireEvent.click(addBtn);

    expect(screen.getByText(/something to do/i)).toBeInTheDocument();
  });
  it("deletes task successfully", () => {
    render(
      <Providers>
        <TaskManagerView />
      </Providers>
    );

    const newTaskInput = screen.getByRole("textbox", {
      name: /add a new task/i,
    });
    const addBtn = screen.getByTestId("AddCircleOutlineIcon");

    fireEvent.change(newTaskInput, {
      target: {
        value: "something to do",
      },
    });

    fireEvent.click(addBtn);

    expect(screen.getByText(/something to do/i)).toBeInTheDocument();

    const deleteBtn = screen.getByTestId("DeleteIcon");
    fireEvent.click(deleteBtn);

    expect(screen.queryByText(/something to do/i)).not.toBeInTheDocument();
  });
  it("edits task successfully", () => {
    render(
      <Providers>
        <TaskManagerView />
      </Providers>
    );

    const newTaskInput = screen.getByRole("textbox", {
      name: /add a new task/i,
    });
    const addBtn = screen.getByTestId("AddCircleOutlineIcon");

    fireEvent.change(newTaskInput, {
      target: {
        value: "something to do",
      },
    });

    fireEvent.click(addBtn);
    expect(screen.getByText(/something to do/i)).toBeInTheDocument();

    const editBtn = screen.getByTestId("EditIcon");
    fireEvent.click(editBtn);

    const saveBtn = screen.getByTestId("SaveIcon");
    expect(saveBtn).toBeInTheDocument();

    const editTaskView = screen.getByTestId("edit-field-something to do");
    const editTaskInput = within(editTaskView).getByRole("textbox");
    fireEvent.change(editTaskInput, {
      target: { value: "something" },
    });

    fireEvent.click(saveBtn);
    expect(screen.queryByText(/something to do/i)).not.toBeInTheDocument();
  });
  it("marks task as done successfully", async () => {
    render(
      <Providers>
        <TaskManagerView />
      </Providers>
    );

    const newTaskInput = screen.getByRole("textbox", {
      name: /add a new task/i,
    });
    const addBtn = screen.getByTestId("AddCircleOutlineIcon");

    fireEvent.change(newTaskInput, {
      target: {
        value: "something to do",
      },
    });

    fireEvent.click(addBtn);

    expect(screen.getByText(/something to do/i)).toBeInTheDocument();

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    const filterSelect = screen.getByRole("combobox");
    fireEvent.mouseDown(filterSelect);

    const pendingOption = await screen.findByRole("option", {
      name: /pending/i,
    });
    fireEvent.click(pendingOption);
    expect(screen.queryByText(/something to do/i)).not.toBeInTheDocument();
  });
  it("tests filter functionality", () => {
    render(
      <Providers>
        <TaskManagerView />
      </Providers>
    );
  });
});
