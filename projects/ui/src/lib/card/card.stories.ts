import { storiesOf, moduleMetadata, addDecorator } from '@storybook/angular';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs/angular';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';

import { CardModule } from './card.module';

storiesOf('Card', module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .addDecorator(
    moduleMetadata({
      imports: [CardModule],
    })
  )
  .add('Default container', () => ({
    template: `
      <its-card>Card</its-card>
    `,
  }))
