import { storiesOf, moduleMetadata, addDecorator } from '@storybook/angular';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs/angular';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';

import { ChipModule } from './chip.module';

storiesOf('Chip', module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .addDecorator(
    moduleMetadata({
      imports: [ChipModule],
    })
  )
  .add('Default container', () => ({
    template: `
      <its-chip>Chip</its-chip>
    `,
  }))
