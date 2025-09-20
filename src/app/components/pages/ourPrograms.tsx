// import React from "react";
// import { motion } from "framer-motion";

// const programmes = [
//   {
//     title: "Mahila Suraksha and Vikas Manch",
//     description: `Over 127 units of grass root women's groups taking care of their safety and 
//     development. Supported by Family Counselling Centre, Adolescent Education, self-help 
//     groups, vocational training & production units. About 10,000 women are associated and 
//     over 15,000 family disputes settled peacefully.`,
//   },
//   {
//     title: "NIRAMAYA Community Health Programme",
//     description: `Provides doorstep health care through medical camps and health education. 
//     Supports Reproductive & Child Health, de-addiction counselling, HIV/AIDS and 
//     female foeticide awareness. Active in TB eradication and COVID-19 relief by 
//     distributing essentials in slum & labour colonies.`,
//   },
//   {
//     title: "Social Defense and Security Division",
//     description: `Day care & nutritional support, medical help, legal aid, counselling, police 
//     protection, social intervention and recreational activities for aged. 
//     Focus on aged females at Bujurg Kuteer. Awareness campaigns for Scheduled Castes 
//     and vulnerable communities.`,
//   },
//   {
//     title: "KOSHISH – Institute of Disability Management",
//     description: `Provides specialized care to differently-abled persons (MR, Autism, CP, Hearing 
//     & Speech Impaired, etc.). Services include special education, vocational training, 
//     counselling, physiotherapy, occupational therapy, parents training & yoga.`,
//   },
//   {
//     title: "Issue Based Action Programme",
//     description: `Focus on human rights, RTI, consumer education, environment protection, women 
//     & children issues. Runs through lobbying, networking, advocacy and pressure group techniques.`,
//   },
//   {
//     title: "Development Resource Centre",
//     description: `Engaged in training, research, documentation & consultancy. Equipped with library, 
//     research lab & video-conferencing. Conducted multiple government-sponsored 
//     evaluations including literacy, welfare of aged, drug de-addiction and COVID-19 interventions.`,
//   },
//   {
//     title: "Tarang - Cultural and Art Wing",
//     description: `Supports programmes through art & culture. Uses audio-visuals, street plays, skits, 
//     and theatre to educate & mobilize masses on social and national issues in collaboration 
//     with schools, colleges and folk artists.`,
//   },
// ];

// const Programmes: React.FC = () => {
//   return (
//     <section className="py-12 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-10">
//           Our Programmes
//         </h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {programmes.map((prog, index) => (
//             <motion.div
//               key={index}
//               className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//             >
//               <h3 className="text-xl font-semibold mb-3 text-green-700">
//                 {prog.title}
//               </h3>
//               <p className="text-gray-600 leading-relaxed text-sm">
//                 {prog.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Programmes;
// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const programmes = [
//   {
//     title: "Mahila Suraksha and Vikas Manch",
//     description: `Over 127 units of grass root women's groups taking care of their safety and 
//     development. Supported by Family Counselling Centre, Adolescent Education, self-help 
//     groups, vocational training & production units. About 10,000 women are associated and 
//     over 15,000 family disputes settled peacefully.`,
//     color: "bg-gradient-to-br from-purple-50 to-blue-50",
//     hoverColor: "bg-gradient-to-br from-purple-100 to-blue-100",
//     borderColor: "border-purple-300"
//   },
//   {
//     title: "NIRAMAYA Community Health Programme",
//     description: `Provides doorstep health care through medical camps and health education. 
//     Supports Reproductive & Child Health, de-addiction counselling, HIV/AIDS and 
//     female foeticide awareness. Active in TB eradication and COVID-19 relief by 
//     distributing essentials in slum & labour colonies.`,
//     color: "bg-gradient-to-br from-green-50 to-teal-50",
//     hoverColor: "bg-gradient-to-br from-green-100 to-teal-100",
//     borderColor: "border-green-300"
//   },
//   {
//     title: "Social Defense and Security Division",
//     description: `Day care & nutritional support, medical help, legal aid, counselling, police 
//     protection, social intervention and recreational activities for aged. 
//     Focus on aged females at Bujurg Kuteer. Awareness campaigns for Scheduled Castes 
//     and vulnerable communities.`,
//     color: "bg-gradient-to-br from-amber-50 to-orange-50",
//     hoverColor: "bg-gradient-to-br from-amber-100 to-orange-100",
//     borderColor: "border-amber-300"
//   },
//   {
//     title: "KOSHISH – Institute of Disability Management",
//     description: `Provides specialized care to differently-abled persons (MR, Autism, CP, Hearing 
//     & Speech Impaired, etc.). Services include special education, vocational training, 
//     counselling, physiotherapy, occupational therapy, parents training & yoga.`,
//     color: "bg-gradient-to-br from-blue-50 to-indigo-50",
//     hoverColor: "bg-gradient-to-br from-blue-100 to-indigo-100",
//     borderColor: "border-blue-300"
//   },
//   {
//     title: "Issue Based Action Programme",
//     description: `Focus on human rights, RTI, consumer education, environment protection, women 
//     & children issues. Runs through lobbying, networking, advocacy and pressure group techniques.`,
//     color: "bg-gradient-to-br from-red-50 to-pink-50",
//     hoverColor: "bg-gradient-to-br from-red-100 to-pink-100",
//     borderColor: "border-red-300"
//   },
//   {
//     title: "Development Resource Centre",
//     description: `Engaged in training, research, documentation & consultancy. Equipped with library, 
//     research lab & video-conferencing. Conducted multiple government-sponsored 
//     evaluations including literacy, welfare of aged, drug de-addiction and COVID-19 interventions.`,
//     color: "bg-gradient-to-br from-teal-50 to-cyan-50",
//     hoverColor: "bg-gradient-to-br from-teal-100 to-cyan-100",
//     borderColor: "border-teal-300"
//   },
//   {
//     title: "Tarang - Cultural and Art Wing",
//     description: `Supports programmes through art & culture. Uses audio-visuals, street plays, skits, 
//     and theatre to educate & mobilize masses on social and national issues in collaboration 
//     with schools, colleges and folk artists.`,
//     color: "bg-gradient-to-br from-yellow-50 to-amber-50",
//     hoverColor: "bg-gradient-to-br from-yellow-100 to-amber-100",
//     borderColor: "border-yellow-300"
//   },
// ];

// const Programmes: React.FC = () => {
//   const [activeCard, setActiveCard] = useState<number | null>(null);

//   return (
//     <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
//       <div className="container mx-auto px-4">
//         <motion.h2 
//           className="text-4xl font-bold text-center mb-12 text-gray-800"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           Our <span className="text-green-600">Programmes</span>
//         </motion.h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {programmes.map((prog, index) => (
//             <motion.div
//               key={index}
//               className={`relative rounded-xl p-6 shadow-md transition-all duration-300 border-2 ${prog.color} ${
//                 activeCard === index 
//                   ? `scale-105 ${prog.hoverColor} ${prog.borderColor} shadow-xl z-10` 
//                   : 'border-transparent hover:shadow-lg'
//               }`}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               whileHover={{ 
//                 scale: 1.03,
//                 transition: { duration: 0.2 }
//               }}
//               onHoverStart={() => setActiveCard(index)}
//               onHoverEnd={() => setActiveCard(null)}
//             >
//               {/* Decorative element */}
//               <div className={`absolute top-0 left-0 w-2 h-full ${prog.borderColor.replace('border', 'bg')} rounded-l-xl`}></div>
              
//               <h3 className="text-xl font-semibold mb-4 text-gray-800 relative pl-2">
//                 {prog.title}
//               </h3>
              
//               <p className="text-gray-600 leading-relaxed text-sm">
//                 {prog.description}
//               </p>
              
//               {/* Hover indicator */}
//               <motion.div 
//                 className={`absolute inset-0 rounded-xl ${prog.borderColor} border-2 pointer-events-none`}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: activeCard === index ? 1 : 0 }}
//                 transition={{ duration: 0.2 }}
//               />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Programmes;
import React, { useState } from "react";
import { motion } from "framer-motion";

const programmes = [
  {
    title: "Mahila Suraksha and Vikas Manch",
    description: `Over 127 units of grass root women's groups taking care of their safety and 
    development. Supported by Family Counselling Centre, Adolescent Education, self-help 
    groups, vocational training & production units. About 10,000 women are associated and 
    over 15,000 family disputes settled peacefully.`,
    icon: "👩‍👩‍👧‍👦",
    color: "linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%)",
  },
  {
    title: "NIRAMAYA Community Health Programme",
    description: `Provides doorstep health care through medical camps and health education. 
    Supports Reproductive & Child Health, de-addiction counselling, HIV/AIDS and 
    female foeticide awareness. Active in TB eradication and COVID-19 relief by 
    distributing essentials in slum & labour colonies.`,
    icon: "🏥",
    color: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
  },
  {
    title: "Social Defense and Security Division",
    description: `Day care & nutritional support, medical help, legal aid, counselling, police 
    protection, social intervention and recreational activities for aged. 
    Focus on aged females at Bujurg Kuteer. Awareness campaigns for Scheduled Castes 
    and vulnerable communities.`,
    icon: "🛡️",
    color: "linear-gradient(135deg, #FF512F 0%, #F09819 100%)",
  },
  {
    title: "KOSHISH – Institute of Disability Management",
    description: `Provides specialized care to differently-abled persons (MR, Autism, CP, Hearing 
    & Speech Impaired, etc.). Services include special education, vocational training, 
    counselling, physiotherapy, occupational therapy, parents training & yoga.`,
    icon: "♿",
    color: "linear-gradient(135deg, #1A2980 0%, #26D0CE 100%)",
  },
  {
    title: "Issue Based Action Programme",
    description: `Focus on human rights, RTI, consumer education, environment protection, women 
    & children issues. Runs through lobbying, networking, advocacy and pressure group techniques.`,
    icon: "⚖️",
    color: "linear-gradient(135deg, #FF5F6D 0%, #FFC371 100%)",
  },
  {
    title: "Development Resource Centre",
    description: `Engaged in training, research, documentation & consultancy. Equipped with library, 
    research lab & video-conferencing. Conducted multiple government-sponsored 
    evaluations including literacy, welfare of aged, drug de-addiction and COVID-19 interventions.`,
    icon: "📚",
    color: "linear-gradient(135deg, #654ea3 0%, #eaafc8 100%)",
  },
  {
    title: "Tarang - Cultural and Art Wing",
    description: `Supports programmes through art & culture. Uses audio-visuals, street plays, skits, 
    and theatre to educate & mobilize masses on social and national issues in collaboration 
    with schools, colleges and folk artists.`,
    icon: "🎭",
    color: "linear-gradient(135deg, #f46b45 0%, #eea849 100%)",
  },
];

const Programmes: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Our Programmes
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover our diverse initiatives designed to empower communities and create lasting positive change.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programmes.map((prog, index) => (
            <motion.div
              key={index}
              className={`relative bg-white rounded-lg shadow-md overflow-hidden border-t-4 transition-all duration-300 ${
                activeCard === index ? "shadow-xl ring-2 ring-blue-400 ring-opacity-50" : "hover:shadow-lg"
              }`}
              style={{ borderTopColor: prog.color.split(' ')[2] }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onHoverStart={() => setActiveCard(index)}
              onHoverEnd={() => setActiveCard(null)}
            >
              <div 
                className="h-2 w-full" 
                style={{ background: prog.color }}
              ></div>
              
              <div className="p-6">
                <div className="text-4xl mb-4">{prog.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {prog.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {prog.description}
                </p>
                
                <motion.div 
                  className="mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.7 }}
                  transition={{ duration: 0.2 }}
                >
                  <button className="text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                    style={{ 
                      background: activeCard === index ? prog.color : 'transparent',
                      color: activeCard === index ? 'white' : '#4A5568',
                      border: `1px solid ${prog.color.split(' ')[2]}`
                    }}
                  >
                    Learn more
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programmes;