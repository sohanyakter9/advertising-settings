import { __ } from '@wordpress/i18n';
import { TextControl } from '@wordpress/components';
import { withDispatch, withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';

export const AdvertiserNameTextControl = compose(
    withDispatch( function( dispatch, props ) {
        return {
            setMetaValue: function( value ) {
                dispatch( 'core/editor' ).editPost( { meta: { [props.metaKey]: value } } );
            }
        }
    } ),

    withSelect( function( select, props ) {
        return {
            metaValue: select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ props.metaKey ],
        }
    } )

)( function( props ) {
    return (
        <TextControl
            type="text"
            label={ props.label }
            value={ props.metaValue }
            className={props.className}
            onChange={ ( content ) => { props.setMetaValue( content ) } }
        />
    );
});