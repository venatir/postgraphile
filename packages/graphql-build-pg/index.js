exports.defaultPlugins = [
  require("./plugins/PgIntrospectionPlugin"),
  require("./plugins/PgTypesPlugin"),
  require("./plugins/PgTablesPlugin"),
  require("./plugins/PgConnectionArgFirstLastBeforeAfter"),
  require("./plugins/PgConnectionArgOrderBy"),
  require("./plugins/PgConnectionArgCondition"),
  require("./plugins/PgAllRows"),
  require("./plugins/PgColumnsPlugin"),
  require("./plugins/PgForwardRelationPlugin"),
  require("./plugins/PgBackwardRelationPlugin"),
  require("./plugins/PgRowByUniqueConstraint"),
  require("./plugins/PgComputedColumnsPlugin"),
  require("./plugins/PgQueryProceduresPlugin"),
  require("./plugins/PgOrderAllColumnsPlugin"),
  require("./plugins/PgOrderByPrimaryKeyPlugin"),
  require("./plugins/PgRowNode"),
];
exports.inflections = require("./inflections");