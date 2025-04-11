<?php

class MM_GdprCookie_Helper_Data extends Mage_Core_Helper_Abstract
{
    public const XML_PATH_ENABLED = 'mm_gdprcookie/general/enabled';
    public const XML_PATH_COOKIE_NAME = 'mm_gdprcookie/general/cookie_name';
    public const XML_PATH_VISIBLE = 'mm_gdprcookie/general/visible';
    public const XML_PATH_HEADING = 'mm_gdprcookie/text_settings/heading';
    public const XML_PATH_DESCRIPTION = 'mm_gdprcookie/text_settings/description';
    public const XML_PATH_PRIVACY_PAGE = 'mm_gdprcookie/text_settings/privacy_page';
    public const XML_PATH_ACCEPT_ALL_LABEL = 'mm_gdprcookie/text_settings/accept_all_label';
    public const XML_PATH_ACCEPT_SELECTED_LABEL = 'mm_gdprcookie/text_settings/accept_selected_label';
    public const XML_PATH_REJECT_LABEL = 'mm_gdprcookie/text_settings/reject_label';
    public const XML_PATH_SETTINGS_LABEL = 'mm_gdprcookie/text_settings/settings_label';
    public const XML_PATH_CLOSE_LABEL = 'mm_gdprcookie/text_settings/close_label';
    public const XML_PATH_EDIT_LABEL = 'mm_gdprcookie/text_settings/edit_label';
    public const XML_PATH_CHOICE_NECESSARY_LABEL = 'mm_gdprcookie/choices/necessary_label';
    public const XML_PATH_CHOICE_NECESSARY_DESCRIPTION = 'mm_gdprcookie/choices/necessary_description';
    public const XML_PATH_CHOICE_NECESSARY_VALUE = 'mm_gdprcookie/choices/necessary_value';
    public const XML_PATH_CHOICE_TRACKING_LABEL = 'mm_gdprcookie/choices/tracking_label';
    public const XML_PATH_CHOICE_TRACKING_DESCRIPTION = 'mm_gdprcookie/choices/tracking_description';
    public const XML_PATH_CHOICE_TRACKING_VALUE = 'mm_gdprcookie/choices/tracking_value';
    public const XML_PATH_CHOICE_ANALYTICS_LABEL = 'mm_gdprcookie/choices/analytics_label';
    public const XML_PATH_CHOICE_ANALYTICS_DESCRIPTION = 'mm_gdprcookie/choices/analytics_description';
    public const XML_PATH_CHOICE_ANALYTICS_VALUE = 'mm_gdprcookie/choices/analytics_value';
    public const XML_PATH_CHOICE_MARKETING_LABEL = 'mm_gdprcookie/choices/marketing_label';
    public const XML_PATH_CHOICE_MARKETING_DESCRIPTION = 'mm_gdprcookie/choices/marketing_description';
    public const XML_PATH_CHOICE_MARKETING_VALUE = 'mm_gdprcookie/choices/marketing_value';
    public const XML_PATH_SHOW_EDIT_ICON = 'mm_gdprcookie/general/show_edit_icon';
    public const XML_PATH_EDIT_ICON_POSITION = 'mm_gdprcookie/general/edit_icon_position';

    /**
     * Check if the module is enabled
     *
     * @param int|string|Mage_Core_Model_Store $store
     * @return bool
     */
    public function isEnabled($store = null): bool
    {
        return Mage::getStoreConfigFlag(self::XML_PATH_ENABLED, $store);
    }

    /**
     * Get config value
     *
     * @param string $path
     * @param int|string|Mage_Core_Model_Store $store
     * @return mixed
     */
    protected function _getConfigValue(string $path, $store = null)
    {
        return Mage::getStoreConfig($path, $store);
    }

    /**
     * Get Cookie Name
     *
     * @param null $store
     * @return string
     */
    public function getCookieName($store = null): string
    {
        return (string)$this->_getConfigValue(self::XML_PATH_COOKIE_NAME, $store);
    }

    /**
     * Get Visible Flag
     *
     * @param null $store
     * @return bool
     */
    public function isVisible($store = null): bool
    {
        return Mage::getStoreConfigFlag(self::XML_PATH_VISIBLE, $store);
    }

    /**
     * Get Heading Text
     *
     * @param null $store
     * @return string
     */
    public function getHeading($store = null): string
    {
        return (string)$this->_getConfigValue(self::XML_PATH_HEADING, $store);
    }

    /**
     * Get Description Text (HTML allowed)
     *
     * @param null $store
     * @return string
     */
    public function getDescription($store = null): string
    {
        $description = (string)$this->_getConfigValue(self::XML_PATH_DESCRIPTION, $store);
        $privacyUrl = $this->getPrivacyPageUrl($store);
        return sprintf($description, $privacyUrl);
    }

    /**
     * Get Privacy Page Identifier
     *
     * @param null $store
     * @return string
     */
    public function getPrivacyPage($store = null): string
    {
        return (string)$this->_getConfigValue(self::XML_PATH_PRIVACY_PAGE, $store);
    }

    /**
     * Get Privacy Page URL
     *
     * @param null $store
     * @return string
     */
    public function getPrivacyPageUrl($store = null): string
    {
        $identifier = $this->getPrivacyPage($store);
        return Mage::getUrl($identifier);
    }

    /**
     * Get Accept All Label
     *
     * @param null $store
     * @return string
     */
    public function getAcceptAllLabel($store = null): string
    {
        return (string)$this->_getConfigValue(self::XML_PATH_ACCEPT_ALL_LABEL, $store);
    }

    /**
     * Get Accept Selected Label
     *
     * @param null $store
     * @return string
     */
    public function getAcceptSelectedLabel($store = null): string
    {
        return (string)$this->_getConfigValue(self::XML_PATH_ACCEPT_SELECTED_LABEL, $store);
    }

    /**
     * Get Reject Label
     *
     * @param null $store
     * @return string
     */
    public function getRejectLabel($store = null): string
    {
        return (string)$this->_getConfigValue(self::XML_PATH_REJECT_LABEL, $store);
    }

    /**
     * Get Settings Label
     *
     * @param null $store
     * @return string
     */
    public function getSettingsLabel($store = null): string
    {
        return (string)$this->_getConfigValue(self::XML_PATH_SETTINGS_LABEL, $store);
    }

    /**
     * Get Close Label
     *
     * @param null $store
     * @return string
     */
    public function getCloseLabel($store = null): string
    {
        return (string)$this->_getConfigValue(self::XML_PATH_CLOSE_LABEL, $store);
    }

    /**
     * Get Edit Label
     *
     * @param null $store
     * @return string
     */
    public function getEditLabel($store = null): string
    {
        return (string)$this->_getConfigValue(self::XML_PATH_EDIT_LABEL, $store);
    }

    /**
     * Get Show Edit Icon Flag
     *
     * @param null $store
     * @return bool
     */
    public function getShowEditIcon($store = null): bool
    {
        return Mage::getStoreConfigFlag(self::XML_PATH_SHOW_EDIT_ICON, $store);
    }

    /**
     * Get Edit Icon Position
     *
     * @param null $store
     * @return string
     */
    public function getEditIconPosition($store = null): string
    {
        return (string)$this->_getConfigValue(self::XML_PATH_EDIT_ICON_POSITION, $store);
    }

    /**
     * Get Choices configuration as an array
     *
     * @param null $store
     * @return array
     */
    public function getChoicesConfig($store = null): array
    {
        $choices = [];

        // Necessary is always true and present
        $choices['necessary'] = [
            'label'       => $this->_getConfigValue(self::XML_PATH_CHOICE_NECESSARY_LABEL, $store),
            'description' => $this->_getConfigValue(self::XML_PATH_CHOICE_NECESSARY_DESCRIPTION, $store),
            'value'       => true, // Always true
        ];

        // Tracking
        $choices['tracking'] = [
            'label'       => $this->_getConfigValue(self::XML_PATH_CHOICE_TRACKING_LABEL, $store),
            'description' => $this->_getConfigValue(self::XML_PATH_CHOICE_TRACKING_DESCRIPTION, $store),
            'value'       => Mage::getStoreConfigFlag(self::XML_PATH_CHOICE_TRACKING_VALUE, $store),
        ];

        // Analytics
        $choices['analytics'] = [
            'label'       => $this->_getConfigValue(self::XML_PATH_CHOICE_ANALYTICS_LABEL, $store),
            'description' => $this->_getConfigValue(self::XML_PATH_CHOICE_ANALYTICS_DESCRIPTION, $store),
            'value'       => Mage::getStoreConfigFlag(self::XML_PATH_CHOICE_ANALYTICS_VALUE, $store),
        ];

        // Marketing
        $choices['marketing'] = [
            'label'       => $this->_getConfigValue(self::XML_PATH_CHOICE_MARKETING_LABEL, $store),
            'description' => $this->_getConfigValue(self::XML_PATH_CHOICE_MARKETING_DESCRIPTION, $store),
            'value'       => Mage::getStoreConfigFlag(self::XML_PATH_CHOICE_MARKETING_VALUE, $store),
        ];

        return $choices;
    }

    /**
     * Get Choices configuration as a JSON string suitable for the web component attribute
     *
     * @param null $store
     * @return string
     */
    public function getChoicesJson($store = null): string
    {
        $choicesConfig = $this->getChoicesConfig($store);
        // The component expects a simpler structure: { key: boolean_value } or { key: false } to hide
        $componentChoices = [];
        foreach ($choicesConfig as $key => $config) {
            // We don't pass necessary=true as it's implicit in the component
            if ($key !== 'necessary') {
                 // For now, we only support enabling/disabling based on default value.
                 // If we wanted to hide categories, we'd need more config options.
                 // Let's assume for now we always show them based on their default state.
                 $componentChoices[$key] = $config['value'];
            }
        }
        // Necessary is always true, so we don't need to explicitly pass it unless we want to hide it (which we don't)
        // If a category needs to be hidden, the component expects `category: false`.
        // We are not implementing hiding categories via config yet.

        return json_encode($componentChoices);
    }

}
