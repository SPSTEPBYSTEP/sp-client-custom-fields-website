import React from 'react';
import {
  Link
} from 'react-router-dom'
import Screenshot from '../images/PropertyFieldCustomList.gif';

const PropertyFieldCustomList = () => (
  <div>
    <h2>Custom List</h2>

    <p>
      This component generates a custom list of items property field in your client side web part for 
      the SharePoint Framework. With this field, you can ask to the user to select a list of data 
      based on fields on different types as string, number, boolean, font, image, etc. All the data 
      of this list are stored as Web Part property as a collection of objects based on the defined fields.
    </p>
    <p>
      <img src={Screenshot} width="606" alt="Custom List"/>
    </p>

    <h2>How to use this custom field in your project</h2>

    <p>
      1. Check that the sp-client-custom-field lib is installed in your project. To install this lib in your project, please
      read the <Link to="/sp-client-custom-fields">Getting Started Page</Link>.
    </p>
    <p>
      2. Create a new property for your web part as for example:
    </p>
    <pre>
export interface IMyWebPartProps &#123;<br/>
&nbsp;&nbsp;customList: any;<br/>
&#125;
    </pre>
    <p>
      3. In you web part file (for example MyWebPart.ts), import the custom field:
    </p>
    <pre>
import &#123; <strong>PropertyFieldCustomList, CustomListFieldType</strong> &#125; from 'sp-client-custom-fields/lib/PropertyFieldCustomList';
    </pre>
    <p>
      4. Add the custom field in your Web Part property pane configuration:
    </p>
    <pre>
protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration &#123;<br/>
&nbsp;&nbsp;return &#123;<br/>
&nbsp;&nbsp;&nbsp;pages: [<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;header: &#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;description: strings.PropertyPaneDescription<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;groups: [<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;groupName: strings.BasicGroupName,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;groupFields: [<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>PropertyFieldCustomList</strong>('customList', &#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label: 'Select values',<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value: this.properties.customList,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;headerText: "Manage News",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fields: [<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; title: 'News Title', required: true, type: CustomListFieldType.string &#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; title: 'Sub title', required: true, type: CustomListFieldType.string &#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; title: 'Link', required: false, type: CustomListFieldType.string, hidden: true &#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; title: 'Order', required: true, type: CustomListFieldType.number &#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; title: 'Active', required: false, type: CustomListFieldType.boolean &#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; title: 'Start Date', required: false, type: CustomListFieldType.date, hidden: true &#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; title: 'End Date', required: false, type: CustomListFieldType.date, hidden: true &#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; title: 'Picture', required: false, type: CustomListFieldType.picture, hidden: true &#125;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/* Examples of additional field types<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; title: 'Font', required: false, type: CustomListFieldType.font, hidden: true &#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; title: 'Font size', required: false, type: CustomListFieldType.fontSize, hidden: true &#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; title: 'Icon', required: false, type: CustomListFieldType.icon, hidden: true &#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; title: 'Password', required: false, type: CustomListFieldType.password, hidden: true &#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; title: 'Users', required: false, type: CustomListFieldType.users, hidden: true &#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; title: 'Color', required: false, type: CustomListFieldType.color, hidden: true &#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; title: 'List', required: false, type: CustomListFieldType.list, hidden: true &#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; title: 'Picture', required: false, type: CustomListFieldType.picture, hidden: true &#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; title: 'Document', required: false, type: CustomListFieldType.document, hidden: true &#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; title: 'Folder', required: false, type: CustomListFieldType.folder, hidden: true &#125;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;disabled: false,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;properties: this.properties,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;context: this.context,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key: 'customListFieldId'<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
&nbsp;&nbsp;&nbsp;]<br/>
  &#125;;
    </pre>

    <h2>Custom Field Properties</h2>

    <p>
      With this custom field, you can define the following properties:
    </p>

    <table cellSpacing="0" cellPadding="0">
      <thead>
        <tr>
          <td>Property</td>
          <td>Required</td>
          <td>Type</td>
          <td>Description</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>label</td>
          <td>yes</td>
          <td>string</td>
          <td>Defines the label displayed on top of the control.</td>
        </tr>
        <tr>
          <td>value</td>
          <td>no</td>
          <td>any</td>
          <td>Defines the selected value by default.</td>
        </tr>
        <tr>
          <td>headerText</td>
          <td>no</td>
          <td>string</td>
          <td>Defines the popin title.</td>
        </tr>
        <tr>
          <td>fields</td>
          <td>no</td>
          <td>Array</td>
          <td>Defines the fields of the list (see more information bellow).</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>no</td>
          <td>boolean</td>
          <td>Whether the property pane field is enabled or not.</td>
        </tr>
        <tr>
          <td>key</td>
          <td>yes</td>
          <td>string</td>
          <td>key (mandatory): An UNIQUE key indicates the identity of this control.</td>
        </tr>
        <tr>
          <td>onPropertyChange</td>
          <td>yes</td>
          <td>function</td>
          <td>Sets the function of the WP to raise when the property's value changed. You must map with the onPropertyPaneFieldChanged method of your web part object.</td>
        </tr>
        <tr>
          <td>properties</td>
          <td>yes</td>
          <td>any</td>
          <td>Defines the Web Part properties. You must always map this property to the properties collection of your Web Part object.</td>
        </tr>
        <tr>
          <td>context</td>
          <td>yes</td>
          <td>any</td>
          <td>Parent web part context.</td>
        </tr>
      </tbody>
    </table>

    <p>
        <a href="https://oliviercc.github.io/sp-client-custom-fields/docs/modules/_propertyfieldcustomlist_.html">
        View the complete custom field API documentation</a>
    </p>

    <h2>Sub Fields Properties</h2>

    <p>
        Each field must have the following properties:
    </p>

    <table cellSpacing="0" cellPadding="0">
      <thead>
        <tr>
          <td>Property</td>
          <td>Type</td>
          <td>Description</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>title</td>
          <td>string</td>
          <td>Field's title</td>
        </tr>
        <tr>
          <td>required</td>
          <td>boolean</td>
          <td>Indicates if the field is mandatory in the forms</td>
        </tr>
        <tr>
          <td>type</td>
          <td>CustomListFieldType</td>
          <td><a href="https://oliviercc.github.io/sp-client-custom-fields/docs/enums/_propertyfieldcustomlist_.customlistfieldtype.html">View the enum documentation</a> for the list of available types</td>
        </tr>
        <tr>
          <td>hidden</td>
          <td>boolean</td>
          <td>Indicates if the field appears in form, but not in the list view</td>
        </tr>
      </tbody>
    </table>

     <h2>Return Result</h2>

    <p>
        The PropertyFieldCustomList field returns an instance of an objects collection. 
        These objects are formed as you define in the fields property. 
        For the previous code sample, the value of the field will be a JSON representation of a collection formatted like this:
    </p>

    <pre>
[&#123;"News Title":"Praesent finibus consectetur elit","Sub title":"Maecenas egestas nulla non ex consectetur, et porta quam bibendum. Donec maximus quis nulla","Link":"http://www.microsoft.com","Order":"2","Active":"true","Start Date":"Thu Sep 08 2016","End Date":"Thu Oct 20 2016","Picture":""&#125;,&#123;"News Title":"Duis lobortis, augue eget auctor","Sub title":"Nullam sollicitudin elementum erat id commodo. Integer et vehicula diam","Link":"http://","Order":"1","Active":"true","Start Date":"Mon Sep 05 2016","End Date":"","Picture":""&#125;,&#123;"News Title":"Nunc vel consectetur turpis","Sub title":" Ut nec diam a nisl mollis porta. Nam pharet","Link":"","Order":"3","Active":"","Start Date":"","End Date":"","Picture":""&#125;,&#123;"News Title":"Duis posuere tempus neque","Sub title":"esque mollis arcu. Aenean leo ligula, ullamcorpe","Link":"","Order":"4","Active":"false","Start Date":"","End Date":"","Picture":""&#125;]
    </pre>
  </div>
)

export default PropertyFieldCustomList;