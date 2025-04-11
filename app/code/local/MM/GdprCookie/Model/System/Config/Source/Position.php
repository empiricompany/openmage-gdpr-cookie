<?php

class MM_GdprCookie_Model_System_Config_Source_Position
{
    /**
     * Options getter
     *
     * @return array
     */
    public function toOptionArray()
    {
        return [
            ['value' => 'left', 'label' => Mage::helper('mm_gdprcookie')->__('Left')],
            ['value' => 'right', 'label' => Mage::helper('mm_gdprcookie')->__('Right')]
        ];
    }

    /**
     * Get options in "key-value" format
     *
     * @return array
     */
    public function toArray()
    {
        return [
            'left' => Mage::helper('mm_gdprcookie')->__('Left'),
            'right' => Mage::helper('mm_gdprcookie')->__('Right')
        ];
    }
}