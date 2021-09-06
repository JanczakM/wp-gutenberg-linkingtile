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
    wp_register_style('mjlinkingtilestyle', plugin_dir_url(__FILE__) . 'build/index.css');
    wp_register_script('mjlinkingtilescript', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element', 'wp-editor'));
    register_block_type('mj/linking-tile', array(
      'editor_script' => 'mjlinkingtilescript',
      'editor_style' => 'mjlinkingtilestyle',
      'render_callback' => array($this, 'theOutput')
    ));
  }

  function stylecheck($attributes) {
    $styles = "";

    if($attributes["imageUrl"]) {
      $img = $attributes["imageUrl"];
      $styles = $styles . "background-image: url({$img}); background-repeat: no-Repeat; background-size: cover; ";
    } if($attributes["backgroundColor"]) {
      $color = $attributes["backgroundColor"];
      $styles = $styles . "background-color: {$color}; ";
    }
    $attributes["paddingTop"] ? $styles = $styles . "padding-top: {$attributes["paddingTop"]}px; " : $styles = $styles . "padding-top: 20px; ";
    $attributes["paddingBottom"] ? $styles = $styles . "padding-bottom: {$attributes["paddingBottom"]}px; " : $styles = $styles . "padding-bottom: 20px; ";
    $attributes["opacity"] ? $styles = $styles . "opacity: {$attributes["opacity"]}; " : $styles = $styles . "opacity: 1; ";
    echo $styles;
  }

  function theOutput($attributes, $content) {

    ob_start(); ?>
    <?php echo $attributes["link"] ? "<a href={$attributes["link"]} target={$attributes["target"]} >" : "" ?>
      <div style="<?php $this->stylecheck($attributes); ?>">
        <?php echo $content ?>
      </div>
    <?php echo $attributes["link"] ? "</a>" : "" ?>
    <?php return ob_get_clean();
  }
}

$mjLinkingTile = new MJLinkingTile();