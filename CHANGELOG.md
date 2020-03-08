# v1.4.0

#### 🚨 Breaking Changes

- all components except `<YetiTable>` are now private and no longer exposed to the application in the global namespace.

#### ✨ Features

- added a new component `tbody`. Unlike the current body component which yields a single record and
  iterates over the array for you, `tbody` yields the array and you must iterate over the array yourself.

#### 🏗 Chores

- the head and foot components have been deprecated and replaced with thead and tfoot
- added prettier to the project

# v1.3.0

#### ✨ Features

- the yielded columns now have a `name` property. It defaults to the column's trimmed `textContent` value, but it can be
  overrided by using a `@name="your custom name"` argument. This feature can be useful for "introspection" purposes,
  e.g if you want to show a list of the columns to the user.

# v1.2.0

#### ✨ Features

- introduced new argument `@renderTableElement={{false}}`. This prevents yeti table from automatically rendering the `<table>` element.
  When you set this argument as `false`, you are responsible for rendering the table element yourself using the yielded `<t.table>` component.
  This is a simple component that is now yielded that just renders the table element with the appropriate theme classes.

#### 🏗 Chores

- updated internal dependencies
- migrate all components to be tagless (more in line with glimmer components)

# v1.1.0

#### ✨ Features

- now you can use `@ignoreDataChanges={{true}}` to prevent yeti from reacting to changes on the underlying data, resorting or refiltering. Useful when doing inline editing in a table. [#151](https://github.com/miguelcobain/ember-yeti-table/pull/151)

#### 🏗 Chores

- updated internal dependencies
- use `ember-on-modifier`
- use ember `fn` helper instead of `action` helper

# v1.0.1

#### 🐛 Bugfixes

- allow usage of nested keys on the `@prop` argument. If the property is a nested property (one that contains
  periods), the table will not be updated when this nested property changes. This is due to `@each` only supporting one level
  of properties.

#### 🏗 Chores

- updated dependencies

# v1.0.0

#### 🚨 Breaking Changes

- `table.visibleRows` is no longer a number of visible rows but the rows data itself. If you want the number of visible rows, you can use `{{table.visibleRows.length}}`
- `table.totalColumns` was renamed to `table.columns` and is no longer a number of total columns but an array of objects that represent the columns. If you want the number of total columns, you can use `{{table.columns.length}}`
- `table.visibleColumns` is no longer a number of visible columns but an array of objects that represent the visible columns. If you want the number of visible columns, you can use `{{table.visibleColumns.length}}`
- the deprecated `@rowClass` argument on `<table.body>` was removed. Use theme feature instead, e.g `<YetiTable @theme={{hash tbodyRow="custom-row-class"}}>`.

#### ✨ Features

- now you can use `table.rows`. This will contain an array of all the rows yeti table knows of. In the sync case, it will contain the entire dataset. In the async case, it will be the same as `table.visibleRows`.
- now you can use `@visible` on any cell component. Useful if you need to escape the default `@visible` value of the corresponding column e.g to always render pagination on the first row with a colspan

#### 🏗 Chores

- updated dependencies and removed `@argument` decorator because it was stopping us from supporting latest ember versions
