import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs/angular';
import { withA11y } from '@storybook/addon-a11y';

import { RxppleModule } from './rxpple.module';

storiesOf('Rxpple', module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .addDecorator(
    moduleMetadata({
      imports: [RxppleModule],
    })
  )
  .add('<* [itsRxpple]/>', () => ({
    template: `
      <div itsRxpple style="width:400px;height:400px;background:hotpink;" class="foo">
        <its-rxpple-container>
          Ripple this
        </its-rxpple-container>
      </div>
    `,
    props: {}
  }))
