import {all, call, spawn} from 'redux-saga/effects'
import {rootSaga as hotelsSaga} from '../../hotels/sagas'

export function* rootSaga(){
    const sagas: any[] = [
        hotelsSaga
    ]
    yield all(
        sagas.map(saga => 
            spawn(function*(){
                while(true){
                    try{
                        yield call(saga);
                        break;
                    } catch(e){
                        
                    }
                }
            })
            
        )
    )
}