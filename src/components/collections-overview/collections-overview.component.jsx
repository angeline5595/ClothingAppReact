import React from 'react';
import './collections-overview.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionsForPreview} from '../../redux/shop-reducer/shop.selector';
import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionsOverview = ({collections})=>(
  <div className="collections-overview">
     {
        collections.map(({id,...othercollectiondatas})=>(
        <CollectionPreview key={id} {...othercollectiondatas}/>)) 
      }
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});
export default connect(mapStateToProps)(CollectionsOverview);