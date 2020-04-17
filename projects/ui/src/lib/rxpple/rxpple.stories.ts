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
  .add('<div [itsRxpple]/>', () => ({
    template: `
      <div itsRxpple style="width:400px;height:400px;background:hotpink;">
        <its-rxpple-container>
          Ripple this
        </its-rxpple-container>
      </div>
      <div itsRxpple style="width:100px;height:200px;background:hotpink;">
        <its-rxpple-container>
          Ripple this
        </its-rxpple-container>
      </div>
      <div itsRxpple style="width:200px;height:100px;background:hotpink;">
        <its-rxpple-container>
          Ripple this
        </its-rxpple-container>
      </div>
    `,
    props: {}
  }))
  .add('<button [itsRxpple]/>', () => ({
    template: `
      <button itsRxpple>
        <its-rxpple-container>
          Ripple this
        </its-rxpple-container>
      </button>
    `,
    props: {}
  }))
