import {Dispatch, SetStateAction} from "react";

export const handlePagination = (stateAction: Dispatch<SetStateAction<number>>, action: string, total: number) => {
    const limit = 10;
    switch (action) {
        case 'prev':
            stateAction((prevState: number) => {
                if (prevState > 1) {
                    return prevState - 1;
                } else {
                    alert('limit')
                    return prevState
                }
            })
            break;
        case 'next':
            stateAction((prevState: number) => {
                if (prevState < total / limit) {
                    return prevState + 1;
                } else {
                    alert('Limit')
                    return prevState;
                }
            })
            break;
    }
}
