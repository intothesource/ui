import { storiesOf, moduleMetadata, addDecorator } from '@storybook/angular';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs/angular';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';

import { DatePickerModule } from './date-picker.module';

storiesOf('Date Picker', module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .addDecorator(
    moduleMetadata({
      imports: [DatePickerModule],
    })
  )
  .add('Default container', () => ({
    template: `
      <its-date-picker>Date Picker</its-date-picker>
    `,
  }))
