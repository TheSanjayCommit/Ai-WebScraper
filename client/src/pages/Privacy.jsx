export default function Privacy() {
    return (
        <div className="pt-24 pb-12 px-4 max-w-4xl mx-auto prose prose-invert">
            <h1>Privacy Policy</h1>
            <p className="text-gray-400 text-sm">Last updated: {new Date().toLocaleDateString()}</p>

            <p>
                Your privacy is important to us. It is AI Web Intelligence's policy to respect your privacy regarding any information we may collect from you across our website.
            </p>

            <h3>1. Information We Collect</h3>
            <p>
                We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.
            </p>

            <h3>2. Usage of Data</h3>
            <p>
                We do not share any personally identifying information publicly or with third-parties, except when required to by law.
                Search queries are processed to generate answers but are not permanently associated with your identity.
            </p>

            <h3>3. External Sources</h3>
            <p>
                Our website may link to external sites that are not operated by us (via citations). Please be aware that we have no control over the content and practices of these sites.
            </p>
        </div>
    );
}
