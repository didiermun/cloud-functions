import {Request,Response} from 'express'
import {Endpoint, RequestType} from 'firebase-backend'

export default new Endpoint(
    'addPaymentMethod',
    RequestType.POST,
    (req: Request, res: Response) => {
        const cardNumber = req.body['c_number']
        const cardHolder = req.body['c_holder']
        const paymentToken = `${cardNumber}_${cardHolder}`

        return res.status(201).send({
            token : paymentToken
        })
    }
)