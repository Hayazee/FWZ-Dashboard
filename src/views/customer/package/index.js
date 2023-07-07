import { useState, useEffect } from 'react';
import Collapse from '@material-ui/core/Collapse';
import ListPackages from './components/listAvailablePackageOffers'
import ViewPackage from './components/viewPackage'

function PackageOffers() {
    const [packageRender, setPackageRender] = useState('all')
    return (
        <>
            {packageRender != 'all' ?
                <Collapse in={packageRender != 'all'}>
                    <ViewPackage data={packageRender} setPackageRender={setPackageRender} />
                </Collapse> : null}
            <Collapse in={packageRender === 'all'}>
                <ListPackages setPackageRender={setPackageRender} />
            </Collapse>
        </>
    );
}
export default PackageOffers;