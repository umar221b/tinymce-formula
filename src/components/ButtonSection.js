/**
 * Created by panos on 10/16/15.
 */
(function() {
  "use strict";

  window.ButtonSection = function(section, panel) {
    this.id = section.id;
    this.name = section.name || trans[section.id] || section.id;
    this.element = document.createElement("div");
    this.element.className = "fm-editor-section";
    this.element.id = this.id + "-section";
    this.panel = panel;
    this.createTitle();
    this.buttons = [];
    if (section.children && section.children.length > 0) {
      this.createButtons(section.children);
    }
  };
  ButtonSection.__name__ = ["ButtonSection"];
  ButtonSection.prototype = {
    createButtons: function(buttons) {
      let actionsHash = this.panel.toolbar.editor.actions;
      let mlang = this.panel.toolbar.editor.mlang;
      let buttonsElt = document.createElement("div");
      buttonsElt.className = "fm-editor-section-buttons";
      for (let i = 0; i < buttons.length; i++) {
        let child = buttons[i];
        let action = actionsHash.get(child);
        if (!!action && !!action[mlang]) {
          let button = new Button(child, this);
          buttonsElt.appendChild(button.element);
          this.buttons.push(button);
        }
      }
      this.element.appendChild(buttonsElt);
    },
    createTitle: function() {
      let title = document.createElement("div");
      title.className = "fm-editor-section-title";
      title.innerHTML = this.name;
      this.element.appendChild(title);
    },
    setActive: function() {
      if (!this.active) {
        DomUtils.addClass(this.element, "active");
        this.active = true;
      }
    },
    unsetActive: function() {
      if (this.active) {
        DomUtils.removeClass(this.element, "active");
        this.active = false;
      }
    },
    element: null,
    active: false,
    buttons: null,
    id: null,
    name: null,
    panel: null,
    __class__: ButtonSection
  };
})();
