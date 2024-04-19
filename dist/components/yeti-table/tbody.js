import Component from '@glimmer/component';
import { hash } from '@ember/helper';
import TBodyRow from './tbody/row.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _class;
class TBody extends Component {}
_class = TBody;
setComponentTemplate(precompileTemplate("\n    <tbody class={{@theme.tbody}} ...attributes>\n      {{yield (hash row=(component TBodyRow theme=@theme onClick=@onRowClick columns=@columns)) @data}}\n    </tbody>\n  ", {
  scope: () => ({
    hash,
    TBodyRow
  }),
  strictMode: true
}), _class);

export { TBody as default };
//# sourceMappingURL=tbody.js.map
