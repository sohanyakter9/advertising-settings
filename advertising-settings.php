<?php
/**
  * Plugin Name: Advertising Settings
  * Description:  A new custom panel is visible in the sidebar for the standard “post” type.
  * Author: Sohany Akter
  */
if( ! defined( 'ABSPATH') ) {
    exit;
}

// 'init' hook
add_action( 'init', function(){
    register_meta( 
		'post', 
		'advertisements_enabled_meta_field', 
		array(
 			'type'		=> 'boolean', 
 			'single'	=> true,
 			'show_in_rest'	=> [
                'schema' => [
                    'type'    => 'boolean',
                    'default' => true,
                ]
            ],
 		)
	);

	register_meta( 
		'post', 
		'advertising_name_meta_field',
		array(
 			'type'           => 'string', 
 			'single'         => true, 
 			'show_in_rest'   => true,
 		)
	);

	register_meta( 
		'post', 
		'commercial_content_type_meta_field', 
		array(
 			'type'		=> 'string',
 			'single'	=> true,
            'show_in_rest'	=> [
                'schema' => [
                    'type'    => 'string',
                    'default' => 'none',
                ]
            ],
 		)
	);
});

// css and js bundle added
function advertising_settings_panel_enqueue_assets() {
    wp_enqueue_script(
        'advertising-settings-js',
        plugins_url( 'build/index.js', __FILE__ ),
        array( 'wp-plugins', 'wp-edit-post', 'wp-i18n', 'wp-element' )
    );
    
    wp_enqueue_style(
        'advertising-settings-css',
        plugins_url( 'assets/css/advertising-settings.css', __FILE__ ),
    );
  }

  add_action( 'enqueue_block_editor_assets', 'advertising_settings_panel_enqueue_assets' );