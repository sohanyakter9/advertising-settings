import { __ } from '@wordpress/i18n';
import { ToggleControl } from '@wordpress/components';
import { withDispatch, withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';

export const AdvertisementsEnabledToggleControl = compose(
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
        <ToggleControl
            label={ props.label }
            checked={ props.metaValue }
            onChange={ ( content ) => { props.setMetaValue( content ) } }
        />
    );    
});

