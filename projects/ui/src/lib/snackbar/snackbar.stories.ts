import { storiesOf, moduleMetadata, addDecorator } from '@storybook/angular';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs/angular';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';

import { SnackbarModule } from './snackbar.module';

storiesOf('Snackbar', module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .addDecorator(
    moduleMetadata({
      imports: [SnackbarModule],
    })
  )
  .add('Default container', () => ({
    template: `
      <its-snackbar>Snackbar</its-snackbar>
    `,
  }))
