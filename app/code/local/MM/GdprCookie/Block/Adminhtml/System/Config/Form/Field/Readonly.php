<?php
class MM_GdprCookie_Block_Adminhtml_System_Config_Form_Field_Readonly extends Mage_Adminhtml_Block_System_Config_Form_Field
{
    protected function _getElementHtml(Varien_Data_Form_Element_Abstract $element)
    {
        $element->setReadonly(true, true);
        return parent::_getElementHtml($element);
    }
}