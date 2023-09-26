import ServiceCard from "./ServiceCard";
import service1 from '../../public/services/service-medical-care-1.png';
import service2 from '../../public/services/service-medical-care-2.png';
import service3 from '../../public/services/service-medical-care-3.png';
import service4 from '../../public/services/service-medical-care-4.png';
import service5 from '../../public/services/service-medical-care-5.png';
import service6 from '../../public/services/service-medical-care-6.png';


const OurServices = () => {
    const services =[
        {
            image:service1,
            title:'Cardiology Clinic',
            subtitle:'Expert consultations with board-certified cardiologists to assess heart health, discuss symptoms, and develop personalized treatment.',
            service:['Cardiac Electrophysiology','Cardiac Catheterization','Arrhythmia Management']
        },
        {
            image:service2,
            title:'Pathology Clinic',
            subtitle:'Comprehensive tests to analyze body fluids, aiding in the diagnosis and monitoring of organ function and metabolic disorders',
            service:['Molecular Pathology','Cytogenetics','Immunology']
        },
        {
            image:service3,
            title:'Laboratory Analysis',
            subtitle:'Our Laboratory Analysis Services offer a comprehensive range of advanced tests to aid in the accurate diagnosis. metabolic disorders.',
            service:['Comprehensive Test Menu','Timely Turnaround','Advanced Diagnostic Tests']
        },
        {
            image:service4,
            title:'Pediatric Clinic',
            subtitle:'Comprehensive well-child checkups, growth monitoring, and developmental assessments to ensure your childs health track.',
            service:['Nutrition Counseling','Pediatric Dermatology','Developmental Evaluations']
        },
        {
            image:service5,
            title:'Cardiac Clinic',
            subtitle:'Find comprehensive care and support for heart failure patients, including lifestyle recommendations and advanced therapies.',
            service:['Heart Failure Program','Cardiac Rehabilitation','Lipid Management:']
        },
        {
            image:service6,
            title:'Neurology Clinic',
            subtitle:'Consultations with specialized neurologists to address various neurological concerns, symptoms, and disorders.',
            service:['Epilepsy Management','Headache and Migraine Clinic','Neurological Examinations'] 
        }
    ]
    return (
        <div className="px-3 lg:px-20 py-10 lg:py-20">
            <div className="text-center">
            <p className="text-[#f7a582] tracking-[2px] text-xl">OUR SERVICES</p>
            <h1 className="text-4xl lg:text-5xl mt-3 mb-7 lg:leading-[55px] font-semibold text-[#07332f] tracking-[1px]">Providing Medical Care For TheSickest <br className="hidden lg:block" /> In Our Community.</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    services.map((serviceInfo,index)=><ServiceCard key={index} serviceInfo={serviceInfo}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default OurServices;