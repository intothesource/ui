import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs/angular';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';

import { DropdownModule } from './dropdown.module';

storiesOf('Dropdown', module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .addDecorator(
    moduleMetadata({
      imports: [DropdownModule],
    })
  )
  .add('<its-dropdown>', () => ({
    template: `
      <its-dropdown>
        <its-dropdown-item>Test Item 1</its-dropdown-item>
        <its-dropdown-item>Test Item 2</its-dropdown-item>
        <its-dropdown-item>Test Item 3</its-dropdown-item>
      </its-dropdown>
    `,
  }))
