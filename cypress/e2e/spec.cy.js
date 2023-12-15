describe("IframeVsWebComponent", () => {
  it("log the load time of landing page", () => {
    const t0 = performance.now();
    cy.visit("/index");
    // cy.get("button");
    cy.wrap(performance.now()).then((t1) => {
      // this is now a queued command which will
      // only run after the previous command
      cy.log(`Page load took ${t1 - t0} milliseconds.`);
    });
  });

  it("log the load time of Iframe with Web Components", () => {
    const t0 = performance.now();
    cy.visit("/poc1/index");
    cy.get("body");
    cy.wrap(performance.now()).then((t1) => {
      // this is now a queued command which will
      // only run after the previous command
      cy.log(`Page load took ${t1 - t0} milliseconds.`);
    });
  });

  it("log the load time of Iframe with HTML", () => {
    const t0 = performance.now();
    cy.visit("/poc2/index");
    cy.get("body");
    cy.wrap(performance.now()).then((t1) => {
      // this is now a queued command which will
      // only run after the previous command
      cy.log(`Page load took ${t1 - t0} milliseconds.`);
    });
  });

  it("log the load time of Only Web Components", () => {
    const t0 = performance.now();
    cy.visit("/poc3/index");
    cy.get("body");
    cy.wrap(performance.now()).then((t1) => {
      // this is now a queued command which will
      // only run after the previous command
      cy.log(`Page load took ${t1 - t0} milliseconds.`);
    });
  });

  it("log the load time of Single HTML", () => {
    const t0 = performance.now();
    cy.visit("/poc4/index");
    cy.get("body");
    cy.wrap(performance.now()).then((t1) => {
      // this is now a queued command which will
      // only run after the previous command
      cy.log(`Page load took ${t1 - t0} milliseconds.`);
    });
  });
});
