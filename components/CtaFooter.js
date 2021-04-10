import { useState } from 'react'
import { useTheme } from 'next-themes';
import Button from './Button'
import ConvertKitForm from 'convertkit-react'


function CtaFooter() {
    const MY_FORM_ID = 2112856
    const [hasSubmitted, setHasSubmitted] = useState(false);


    function handleOnSubmit(e) {
        e.preventDefault();
        e.persist();

        setHasSubmitted(true);

        const { currentTarget } = e;

        setTimeout(() => {
            currentTarget.submit();
            setHasSubmitted(false);
        }, 1000);
    }
    const { theme, setTheme } = useTheme();
    return (
        <div className=" pt-20 pb-16 dark:bg-gray-900">

            <div className=" max-w-2xl mx-auto text-center px-4 sm:py-8 sm:px-6 lg:px-8">

                <h2 className="title text-3xl mb-8 leading-9 pt-4 font-extrabold text-gray-700 sm:text-4xl sm:leading-10 dark:text-white">
                    <span className="block">Subscribe to receive updates about study groups</span>
                </h2>
                <ConvertKitForm className="ck-fm " formId={MY_FORM_ID} />
            </div>
        </div>
    )
}

export default CtaFooter;

