import { __ } from '@wordpress/i18n';
import { RadioControl } from '@wordpress/components';
import { withDispatch, withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';

import { AdvertiserNameTextControl } from './advertiser-name-text-control';

export const CommercialContentTypeRadioControl = compose(
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
        <>
            <RadioControl
                label={ props.label }
                selected={
                    props.metaValue
                        ? props.metaValue
                        : 'none'
                }
                options={ [
                    { label: 'None', value: 'none' },
                    { label: 'Sponsored Content', value: 'sponsored-content' },
                    { label: 'Partnered Content', value: 'partnered-content' },
                    { label: 'Brought to you by', value: 'brought-to-you-by' },
                ] }
                onChange={ ( content ) => { props.setMetaValue( content ) } }
            /> 
            { 'none' !== props.metaValue &&
                <AdvertiserNameTextControl label="Advertiser Name" metaKey="advertising_name_meta_field" />
            }              
        </>                
    );        
}); 