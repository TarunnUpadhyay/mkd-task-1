const db = require("../models");
let AuthService = require("../services/AuthService");

module.exports = function (
  entity,
  pageName = "",
  success,
  error,
  base_url = ""
) {
  this._entity = entity;
  this.session = null;

  this.success = success || null;
  this.error = error || null;

  this._base_url = base_url;

  this.get_page_name = () => pageName;

  this.endpoint = "/admin/termination-variables-add";

  this.heading = "Add termination variable";

  this.action = "/admin/termination-variables-add";

  this.form_fields = { termination_message: "", termination_counter: 10 };

  return this;
};
