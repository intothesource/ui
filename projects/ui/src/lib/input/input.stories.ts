import { storiesOf, moduleMetadata, addDecorator } from '@storybook/angular';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs/angular';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';

import { InputModule } from './input.module';

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .addDecorator(
    moduleMetadata({
      imports: [InputModule],
    })
  )
  .add('Default container', () => ({
    template: `
      <its-input>Input</its-input>
    `,
  }))
