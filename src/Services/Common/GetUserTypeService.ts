import { VoidMessage } from "../../Grpc/proto_files/ServiceProviderAndCustomer_pb";
import { UserTypeWorkerV1Client } from "../../Grpc/proto_files/ServiceProviderAndCustomer_grpc_pb";
import FirebaseUserInfoHelper from "../../Auth/FirebaseUserInfoHelper";
import { credentials, Metadata } from "@grpc/grpc-js";

function getUserTypeClient(): UserTypeWorkerV1Client {

    var meta = new Metadata();
    meta.add("","");

    return new UserTypeWorkerV1Client("https://apippe.pictoinfo.com", credentials.createInsecure(), meta);
}

export default async function getUserType() {
    try {
        var userToken = await FirebaseUserInfoHelper()!;
        const request = new VoidMessage();

        await getUserTypeClient().getUserType(
            request,
            (err, resp) => {
                if (err == null) {
                    console.log("GET_USER_TYPE action", resp.toObject());
                } else {
                    console.log(err);
                }
            },
        );
    } catch (error) {
        return null;
    }
    return null;
}