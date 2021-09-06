import "./index.scss"
import { Button, ToggleControl } from "@wordpress/components"
import { MediaUpload, MediaUploadCheck, InspectorControls, InnerBlocks, useBlockProps, BlockControls, URLPopover, URLInput } from "@wordpress/block-editor"
import { link } from "@wordpress/icons"
import { Panel, PanelBody, PanelRow, ToolbarGroup, ToolbarButton, ColorPicker, __experimentalNumberControl as NumberControl, RangeControl } from "@wordpress/components"

wp.blocks.registerBlockType("mj/linking-tile", {
  title: "Linking tile",
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-app" viewBox="0 0 16 16">
      <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
    </svg>
  ),
  category: "common",
  attributes: {
    imageUrl: { type: "string" },
    paddingTop: { type: "number", default: 20 },
    paddingBottom: { type: "number", default: 20 },
    link: { type: "string" },
    target: { type: "string" },
    popoverVisible: { type: "boolean", default: false },
    backgroundColor: { type: "string" },
    darken: { type: "number", default: 0 }
  },
  example: {
    attributes: {
      imageUrl: "https://aktywnepodroze.pl/wp-content/uploads/2021/08/gr-222-szlak.jpg",
      paddingTop: 50,
      paddingBottom: 50,
      link: "",
      target: "",
      popoverVisible: false,
      backgroundColor: "#FF9D00",
      darken: 0
    }
  },
  edit: Edit,
  save: function (props) {
    return <InnerBlocks.Content />
  }
})

function Edit(props) {
  const ALLOWED_BLOCKS = ["core/heading", "core/paragraph"]

  function setImage(media) {
    props.setAttributes({ imageUrl: media.url })
  }

  function setPaddingTop(paddingTop) {
    props.setAttributes({ paddingTop: parseInt(paddingTop) })
  }

  function setPaddingBottom(paddingBottom) {
    props.setAttributes({ paddingBottom: parseInt(paddingBottom) })
  }

  function setLink(url, post) {
    post ? props.setAttributes({ link: post.url }) : props.setAttributes({ link: url })
  }

  function setBackgroundColor(value) {
    props.setAttributes({ backgroundColor: value.hex })
  }

  function setDarken(value) {
    props.setAttributes({ darken: value })
  }

  function removeImage() {
    props.setAttributes({ imageUrl: "" })
  }

  const styles = {
    withImage: {
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundImage: `linear-gradient(rgba(0, 0, 0, ${props.attributes.darken}), rgba(0, 0, 0, ${props.attributes.darken})), url(${props.attributes.imageUrl})`
    },
    withColor: {
      backgroundColor: props.attributes.backgroundColor
    },
    base: {
      paddingTop: `${props.attributes.paddingTop}px`,
      paddingBottom: `${props.attributes.paddingBottom}px`
    }
  }

  function selectStyle() {
    let selectedStyles = {}
    if (props.attributes.imageUrl) {
      selectedStyles = Object.assign(selectedStyles, styles.withImage)
    }
    if (props.attributes.backgroundColor) {
      selectedStyles = Object.assign(selectedStyles, styles.withColor)
    }
    selectedStyles = Object.assign(selectedStyles, styles.base)
    return selectedStyles
  }

  return (
    <div {...useBlockProps()} style={selectStyle()} className="mj-linkingtile">
      <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
      <BlockControls>
        <ToolbarGroup label="Options">
          <ToolbarButton icon={link} label="Link" onClick={() => props.setAttributes({ popoverVisible: true })} />
          {props.attributes.popoverVisible && (
            <URLPopover onClose={() => props.setAttributes({ popoverVisible: false })} renderSettings={() => <ToggleControl label="Open in new tab" checked={props.attributes.target == "_blank"} onChange={() => (props.attributes.target ? props.setAttributes({ target: "" }) : props.setAttributes({ target: "_blank" }))} />}>
              <URLInput onChange={setLink} value={props.attributes.link} />
            </URLPopover>
          )}
        </ToolbarGroup>
      </BlockControls>
      <InspectorControls>
        <Panel>
          <PanelBody title="Background image">
            <PanelRow>
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={setImage}
                  allowedTypes="image"
                  value={props.attributes.imageUrl}
                  render={({ open }) => (
                    <Button className="is-primary" onClick={open}>
                      Choose image
                    </Button>
                  )}
                />
              </MediaUploadCheck>
              <Button onClick={removeImage}>Remove image</Button>
            </PanelRow>
            <PanelRow>
              <RangeControl label="Dark overlay" value={props.attributes.darken} onChange={setDarken} min={0} max={1} step={0.1} className="fullwidth-panel" />
            </PanelRow>
          </PanelBody>
        </Panel>
        <Panel>
          <PanelBody title="Background color">
            <ColorPicker color={props.attributes.backgroundColor} onChangeComplete={setBackgroundColor} disableAlpha />
          </PanelBody>
        </Panel>
        <Panel>
          <PanelBody title="Paddings">
            <PanelRow>
              <NumberControl label="Padding top (px)" value={props.attributes.paddingTop} onChange={setPaddingTop} />
            </PanelRow>
            <PanelRow>
              <NumberControl label="Padding bottom (px)" value={props.attributes.paddingBottom} onChange={setPaddingBottom} />
            </PanelRow>
          </PanelBody>
        </Panel>
      </InspectorControls>
    </div>
  )
}
