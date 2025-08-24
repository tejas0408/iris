"use client";

import {useOrganization} from "@clerk/nextjs"
import {AuthLayout} from "../layouts/auth-layout";
import { OrgselectionView } from "../views/org-selection-view";

export const OrganizationGuard =({children}: {children: React.ReactNode;})=>{
   const {organization}= useOrganization();

   if (!organization){
    return (
        <AuthLayout>
            <OrgselectionView/>
        </AuthLayout>
    )
   }
   
   
   
    return (
        <div>
            {children}
        </div>
    )
        

    
}