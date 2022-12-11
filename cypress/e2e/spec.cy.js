describe("Test adding a new task", () => {
  it("Visits the page and adds an example task", () => {
    cy.visit("/");

    cy.get("button[id=new_task_button]").click();

    let taskName = "Example task name";

    cy.get("input[name=task_name]").type(taskName);

    cy.get("button[id=increase_est_button]").click();

    cy.get("button[id=add_task_button]").should("not.be.disabled").click("");

    cy.get("div[id^=task_item_]").should("exist");
  });
});
