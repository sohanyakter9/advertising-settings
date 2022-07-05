import { __ } from '@wordpress/i18n';
import { registerPlugin } from '@wordpress/plugins';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';

import { AdvertisementsEnabledToggleControl } from './components/advertisements-enabled-toggle-control';
import { CommercialContentTypeRadioControl } from './components/commercial-content-type-radio-control';

const PluginDocumentAdvertisingSettingPanel = () => (
    <PluginDocumentSettingPanel
        name="advertising-settings"
        title="Advertising Settings"
        className="advertising-settings"
    >
        <AdvertisementsEnabledToggleControl label="Advertisements Enabled?" metaKey="advertisements_enabled_meta_field" />
        <CommercialContentTypeRadioControl label="Commercial content type" metaKey="commercial_content_type_meta_field" />
    </PluginDocumentSettingPanel>
);

registerPlugin('plugin-document-advertising-settings-panel', {
    render: PluginDocumentAdvertisingSettingPanel
})