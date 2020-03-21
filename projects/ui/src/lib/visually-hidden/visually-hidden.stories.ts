import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withA11y } from '@storybook/addon-a11y';
import { VisuallyHiddenModule } from './visually-hidden.module';

storiesOf('util.itsVisuallyHidden', module)
  .addDecorator(withA11y)
  .addDecorator(
    moduleMetadata({
      imports: [VisuallyHiddenModule],
    })
  )
  .add('[itsVisuallyHidden]', () => ({
    template: `
      <p>
        Visually hidden helper provides a directive that helps to hide elements
        in a way that is a11y friendly.
      </p>
      <p>
        The element does not take up any space but it can still be visible to
        screen readers that rely on the actual operation of a certain HTML
        element, such as checkboxes and radio elements.
      </p>
      <table cellpadding=10>
        <thead>
          <tr bgcolor="#efefef">
            <th align=right>Element</th>
            <th align=left>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th valign=top>Checkbox</th>
            <td>
              <label>
                <input type="checkbox"
                  itsVisuallyHidden
                >
                You should not see the checkbox.
              </label>
            </td>
          </tr>
          <tr>
            <th valign=top>Radio Button</th>
            <td>
              <label>
                <input type="radio" itsVisuallyHidden> You should
                <input type="radio" itsVisuallyHidden> not see
                <input type="radio" itsVisuallyHidden> the radio button.
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    `,
  }))
