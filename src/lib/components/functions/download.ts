/**
 * It downloads a file from the server and saves it to the user's computer.
 */
export const download = async () => {
    const video = "Tipdonosor_trailer.mp4";
    const select = document.getElementById("version_select")
    const res = await fetch("/api/apkDownload")

    const file = new Blob([video], { type: "video/apk"})
    const nav = (window.navigator as any);

    if (nav.msSaveOrOpenBlob) {
        nav.msSaveOrOpenBlob(file, "Test.apk")
        setTimeout(() => {  window.location.href="/" }, 5000);
    } else {
        const a = document.createElement("a"),
            url = URL.createObjectURL(file)
        
        a.href = url
        a.download = "Test.apk"
        document.body.appendChild(a)
        a.click()
        setTimeout(function () {
            document.body.removeChild(a)
            window.URL.revokeObjectURL(url)
        }, 0)
    }
}