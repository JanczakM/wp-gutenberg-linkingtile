<?php 

/*
Plugin Name: Linking Tile Block
Description: A tile with the image in the background and link
Version: 1.0
Author: MJ
*/

if( ! defined( 'ABSPATH' ) ) exit;

class MJLinkingTile {
  function __construct() {
    add_action('init', array($this, 'adminAssets'));
  }

  function adminAssets() {
    wp_register_script('mjlinkingtile', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element', 'wp-editor'));
    register_block_type('mj/linking-tile', array(
      'editor_script' => 'mjlinkingtile',
      'render_callback' => array($this, 'theOutput')
    ));
  }

  function theOutput($attributes, $content) {
    ob_start(); ?>
    <div style="background-image: url(<?php echo $attributes["imageUrl"] ?>); background-repeat: no-repeat; background-size: cover; padding-top: <?php echo $attributes["paddingTop"] ? $attributes["paddingTop"] : 20 ?>px; padding-bottom: <?php echo $attributes["paddingBottom"] ? $attributes["paddingBottom"] : 20 ?>px">
      <?php echo $content ?>
    </div>
    <?php return ob_get_clean();
  }
}

$mjLinkingTile = new MJLinkingTile();