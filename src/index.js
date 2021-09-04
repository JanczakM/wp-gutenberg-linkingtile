import { Button } from "@wordpress/components"
import { MediaUpload, MediaUploadCheck, InspectorControls, InnerBlocks, useBlockProps } from "@wordpress/block-editor"
import { Panel, PanelBody, __experimentalNumberControl as NumberControl } from "@wordpress/components"

wp.blocks.registerBlockType("mj/linking-tile", {
  title: "Linking tile",
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-app" viewBox="0 0 16 16">
      <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
    </svg>
  ),
  category: "common",
  attributes: {
    imageUrl: { type: "string", default: undefined },
    paddingTop: { type: "number", default: 20 },
    paddingBottom: { type: "number", default: 20 }
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

  return (
    <div {...useBlockProps()} style={props.attributes.imageUrl ? { backgroundImage: `url(${props.attributes.imageUrl})`, paddingTop: `${props.attributes.paddingTop}px`, paddingBottom: props.attributes.paddingBottom, backgroundRepeat: "no-Repeat", backgroundSize: "cover" } : { paddingTop: props.attributes.paddingTop, paddingBottom: `${props.attributes.paddingBottom}px` }}>
      <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
      <InspectorControls>
        <Panel>
          <PanelBody title="BackgroundImage">
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
          </PanelBody>
        </Panel>
        <Panel>
          <PanelBody title="paddings">
            <NumberControl label="Padding top (px)" value={props.attributes.paddingTop} onChange={setPaddingTop} />
            <NumberControl label="Padding bottom (px)" value={props.attributes.paddingBottom} onChange={setPaddingBottom} />
          </PanelBody>
        </Panel>
      </InspectorControls>
    </div>
  )
}
