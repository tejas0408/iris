import { OrganizationList } from "@clerk/nextjs";

export const OrgselectionView= ()=>{
    return(
        <OrganizationList
        afterCreateOrganizationUrl="/"
        afterSelectPersonalUrl="/"
        hidePersonal
        skipInvitationScreen
        />
    );
};