import { NextPage } from "next"

export const StepsCursoDesarrollo = () => {
    return (
        <div className="pt-24 pb-24 sm:pb-28 mx-auto px-8 max-w-7xl dark:bg-gray-900" >

            <div className=" text-center" >
                <h3 className="text-2xl font-bold leading-7 text-gray-900 pb-8 sm:pb-12 sm:text-3xl dark:text-white" > Objetivos de este grupo </h3>

                < div className="flex flex-col lg:flex-row" >
                    <div className="my-6 text-center mx-5 px-4 py-5 rounded-lg shadow-lg lg:w-1/4 dark:bg-gray-800" >
                        <div className="flex justify-center my-2" >
                            <span className="h-10 w-10 bg-blue-500 flex items-center justify-center rounded-full text-lg leading-10 font-display font-bold text-white" > 1 </span>
                        </div>
                        < h4 className="text-lg font-semibold text-black dark:text-gray-100 " > Introduccion a HTML </h4>
                        < p className="mt-3 text-base font-medium text-gray-600 dark:text-gray-400" > Aprender a crear la estructura de una pagina web</p>
                    </div>
                    < div className="my-6 text-center mx-5 px-4 py-5 rounded-lg shadow-lg lg:w-1/4 dark:bg-gray-800" >
                        <div className="flex justify-center my-2" >
                            <span className="h-10 w-10 bg-blue-500 flex items-center justify-center rounded-full text-lg leading-10 font-display font-bold text-white" > 2 </span>
                        </div>
                        < h4 className="text-lg font-semibold text-black dark:text-gray-100 " > Introduccion a CSS </h4>
                        < p className="mt-3 text-base font-medium text-gray-600 dark:text-gray-400" > Aprender a dar estilos a una pagina web.</p>
                    </div>
                    < div className="my-6 text-center mx-5 px-4 py-5 rounded-lg shadow-lg lg:w-1/4 dark:bg-gray-800" >
                        <div className="flex justify-center my-2" >
                            <span className="h-10 w-10 bg-blue-500 flex items-center justify-center rounded-full text-lg leading-10 font-display font-bold text-white" > 3 </span>
                        </div>
                        < h4 className="text-lg font-semibold text-black dark:text-gray-100 " > Introduccion a Javascript </h4>
                        < p className="mt-3 text-base font-medium text-gray-600 dark:text-gray-400" >Aprender a usar funciones y crear interaccion en una pagina web.</p >
                    </div>
                    < div className="my-6 text-center mx-5 px-4 py-5 rounded-lg shadow-lg lg:w-1/4 dark:bg-gray-800" >
                        <div className="flex justify-center my-2" >
                            <span className="h-10 w-10 bg-blue-500 flex items-center justify-center rounded-full text-lg leading-10 font-display font-bold text-white" > 4 </span>
                        </div>
                        < h4 className="text-lg font-semibold text-black dark:text-gray-100 " >Git y Github </h4>
                        < p className="mt-3 text-base font-medium text-gray-600 dark:text-gray-400" > Aprender a manejar versiones de codigo en un repositorio local hasta trabajar con repositorios remotos.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
