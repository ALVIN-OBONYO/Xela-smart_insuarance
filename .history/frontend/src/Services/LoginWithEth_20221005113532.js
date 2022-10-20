export const getCurrentWallet = async () => {
    if (window.ethereum) {
        try {
            const addressRay = await window.ethereum.request({
                method: "eth_accounts",
            })
            if (addressRay.length > 0) {
                return {
                    address: addressRay[0],
                    status: "write message"
                }
            }
            else {
                return {
                    address: "",
                    status: " Connect to metamask"
                }
            }
        } catch (err) {
            return {
                address: "",
                status: err.message
            }
        }
    }
    else {
        return {
            address: "",
            status: (
                <span>
                    Install metamask
                </span>
            )
        }
    }
}

