import React from 'react';
import ButtonIconOnly from './ButtonIconOnly';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import SettingsIcon from '../../globals/svg/iris_icon_settings_16.svg';
import DownloadIcon from '../../globals/svg/iris_icon_download_16.svg';
import DeleteIcon from '../../globals/svg/iris_icon_delete_16.svg';

const ButtonIconOnlyDocs = (props) => {
    return (
        <div className="Pattern__docs">
            <p>Icon Only Buttons are used when an icon needs to serve as a button element. These are generally used when a text label is not feasible due to spatial contraints.</p>
            <p><strong>Spacing Note:</strong> Icon Only buttons will receive automatic spacing if they are siblings in a node. Any other usage requires manual spacing.</p>
            <p><strong>Accessibility Note:</strong> You must include a useful title attribute on the icon svg.</p>
            <p><strong>Sizing Note:</strong> The icon size is the same for both <code>md</code> and <code>sm</code> sizes, but their box size varies to match the element with which it may be inlined.</p>
            <div style={{ 'padding': '1rem', 'width': '100%' }} data-code>
                <ButtonIconOnly
                    icon={<SettingsIcon />}
                    format="dark"
                    size="sm"
                />
                <ButtonIconOnly
                    icon={<DownloadIcon title="Download" />}
                    format="dark"
                    size="sm"
                />

                <ButtonIconOnly
                    icon={<SettingsIcon />}
                    format="dark"
                    size="md"
                />
                <ButtonIconOnly
                    icon={<DownloadIcon title="Download" />}
                    format="dark"
                    size="md"
                />
            </div>

             <div style={{ 'padding': '1rem', 'width': '100%' }} data-code>
                <ButtonIconOnly
                    icon={<DeleteIcon title="Delete"/>}
                    format="warning"
                    size="sm"
                />
                <ButtonIconOnly
                    icon={<DeleteIcon title="Delete"/>}
                    format="warning"
                    size="sm"
                />

                 <ButtonIconOnly
                    icon={<DeleteIcon title="Delete"/>}
                    format="warning"
                    size="md"
                />
                <ButtonIconOnly
                    icon={<DeleteIcon title="Delete"/>}
                    format="warning"
                    size="md"
                />
            </div>

             <div data-code style={{ 'backgroundColor': '#2E2E2E', 'padding': '1rem', 'width': '100%' }}>
                    <ButtonIconOnly
                        icon={<SettingsIcon title="Settings" />}
                        format="alternative"
                        size="sm"
                    />

                    <ButtonIconOnly
                        icon={<DownloadIcon title="Download" />}
                        format="alternative"
                        size="sm"
                    />
                     <ButtonIconOnly
                        icon={<SettingsIcon title="Settings" />}
                        format="alternative"
                         size="md"
                    />

                    <ButtonIconOnly
                        icon={<DownloadIcon title="Download" />}
                        format="alternative"
                         size="md"
                    />
            </div>
            <div data-code style={{ 'backgroundImage': 'url(https://placekitten.com/1000/800)', 'backgroundSize': 'cover', 'backgroundPosition': 'center', 'padding': '1rem', 'width': '100%' }}>
                 <ButtonIconOnly
                    icon={<SettingsIcon title="Settings" />}
                    format="light"
                    size="sm"
                />

                <ButtonIconOnly
                    icon={<DownloadIcon title="Download" />}
                    format="light"
                    size="sm"
                />
                 <ButtonIconOnly
                    icon={<SettingsIcon title="Settings" />}
                    format="light"
                    size="md"
                />

                <ButtonIconOnly
                    icon={<DownloadIcon title="Download" />}
                    format="light"
                    size="md"
                />
            </div>

            <ExampleSource>
                {`
// Dark
<ButtonIconOnly
    icon={<SettingsIcon title="Settings" />}
    format="dark"
    size="sm"
 />

 //Warning
 <ButtonIconOnly
    icon={<DeleteIcon title="Delete"/>}
    format="warning"
    size="sm"
/>
 // Alternative
 <ButtonIconOnly
    icon={<SettingsIcon title="Settings" />}
    format="alternative"
    size="sm"
/>
// Light
 <ButtonIconOnly
    icon={<SettingsIcon title="Settings" />}
    format="light"
    size="sm"
/>
                `}
                </ExampleSource>
                <h3>Using with Anchor Tags</h3>
                <p>If you need the button to serve as a link rather than an actual button set the <code>isButtonElement</code> prop to false. This will change the button element to a span element which can be legally wrapped in an anchor tag.</p>
                   <div data-code>
                <ButtonIconOnly
                    icon={<SettingsIcon title="Settings" />}
                    format="dark"
                    isButtonElement={false}
                />
                <ButtonIconOnly
                    icon={<DownloadIcon title="Download" />}
                    format="dark"
                    isButtonElement={false}
                />
                </div>
                            <ExampleSource>
                {`
<ButtonIconOnly
    icon={<SettingsIcon title="Settings" />}
    format="dark"
    isButtonElement={false}
/>
<ButtonIconOnly
    icon={<DownloadIcon title="Download" />}
    format="dark"
    isButtonElement={false}
/>
                `}
                </ExampleSource>
            </div>
    );
};

export default ButtonIconOnlyDocs;