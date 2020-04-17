import { storiesOf, moduleMetadata, addDecorator } from '@storybook/angular';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs/angular';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';

import { ModalModule } from './modal.module';

storiesOf('Modal', module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .addDecorator(
    moduleMetadata({
      imports: [ModalModule],
    })
  )
  .add('Default container', () => ({
    template: `
      <its-modal>Modal</its-modal>
    `,
  }))
