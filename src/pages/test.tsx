import React, { useEffect } from "react";
import { BasicFeService } from "services";

export const Test = () => {
    console.log('test')
    useEffect(() => {
        BasicFeService.api({}).then((res) => {
          console.log(res, 'api')
        })
      })
    return(
        <div>

        </div>
    )
}