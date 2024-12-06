import { render } from "@testing-library/react";
import { TaskManagerView } from "../TaskManagerView";
import { Providers } from "../../../test-helpers/Providers";

describe("TaskManagerView", () => {
  it("renders", () => {
    render(
      <Providers>
        <TaskManagerView />
      </Providers>
    );
  });
});
