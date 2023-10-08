function installLumix() {
    alert("In maintenance.");
}
function copyCode() {
    navigator.clipboard.writeText(`op main() {
greeting = "Hello, world!";
print(greeting);
}`)
    alert("Copied to clipboard.");
}