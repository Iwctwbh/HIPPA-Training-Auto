var dict = JSON.parse(
  `{"Each of the following are ways that Texas HB 300 expands individual privacy protections beyond HIPAA EXCEPT:":"B. Expands the definition of HIPAA Minimum Necessary Disclosure","What is the purpose of Technical security safeguards?":"D. To protect data and control access to it","Which of the following is NOT a requirement of the HIPAA Privacy standards?":"D. Internet firewalls to ensure that hackers don't steal patient health information","Which of the following is NOT an example of health care plans?":"D. Healthcare provider","Which of these entities is NOT considered a covered entity?":"D. Business Associates","Which standard is for controlling and safeguarding of PHI in all forms?":"D. Privacy Standards","Business Associates are required to sign Business Associate Contracts with which of the following?":"A. Healthcare Providers, Health Insurance Carriers, Employer Group Health Plans, and Healthcare Clearinghouses","Who must comply with the Security Rule?":"B. Any person or organization that stores, maintains, or transmits individually identifiable health information electronically","All of the following are true about Business Associate Contracts EXCEPT:":"D. Business Associates are NOT required to obtain “satisfactory assurances” (i.e., that their PHI will be protected as required by HIPAA law) from their subcontractors","An authorization is required for which of the following?":"C. Non-routine disclosures","Which is NOT one of the obligations of a Business Associate?":"C. To maintain a paper copy of all PHI","Who enforces HIPAA?":"B. Department of Health and Human Services","The Privacy and Security rules specified by HIPAA are:":"C. reasonable and scalable to account for the nature of each organization‘s culture, size, and resources. Each organization will determine its own privacy policies and security practices within the context of the HIPAA requirements and its own capabilities and needs.","Business Associates must comply with the HIPAA Security standards:":"B. If they store, maintain, or transmit protected health information in electronic form","What does PHI stand for?":"C. Protected Health Information","Which of these statements accurately reflects the definition of protected health information (PHI)? ":"D. PHI includes PHI stored on any form of media.","The five titles under HIPAA fall logically into which two major categories:":"B. Administrative Simplification and Insurance Reform","Within HIPAA how does Security differ from Privacy?":"B. Security defines safeguards for ePHI versus Privacy which defines safeguards for PHI","A Business Associate may use or disclose PHI received from a covered entity for:":"A. The specific purposes stated in the Business Associate Contract with the Covered Entity","The HIPAA Security Rule is:":"A. a technology neutral, federally mandated “floor” of protection whose primary objective is to protect the confidentiality, integrity, and availability of individually identifiable health information in electronic form when it is stored, maintained, or transmitted.","Which of these entities could be considered a business associate?":"C. Insurance Broker","Which standard is for safeguarding of PHI specifically in electronic form (ePHI)?":"A. Security Standards","Which of the following statements is accurate regarding the \\"Minimum Necessary\\" rule in the HIPAA regulations?":"A. Covered entities and business associates are required to limit the use or disclosure of PHI to the minimum necessary to accomplish the intended or specified purpose.","The Administrative Simplification section of HIPAA consists of standards for all the following areas except:":"D. Insurance Reform","If a Business Associate discovers that protected health information (PHI) was improperly used or disclosed, what are they obligated to do?":"B. Notify the Covered Entity","All of the following can be considered ePHI EXCEPT:":"C. Paper medical records","What is a key to success for HIPAA compliance?":"B. Education","The Security Rule allows covered entities and business associates to take into account all of the following EXCEPT:":"F. Their corporate status","For which of the following is a business associate contract NOT required?":"D. Both A and C","Which of the following is NOT an example of physical security?":"D. Data encryption","Which of the following is NOT an example of a health care provider?":"B. Employer Group Health Plan","The HIPAA Security Rule's broader objectives were designed to do all of the following EXCEPT:":"E. Mitigate financial losses from environmental hazards","When does state privacy law supersede HIPAA?":"B. When state privacy law is more stringent than HIPAA","Of the following, which is NOT an implication of non-compliance with HIPAA?":"D. Bankruptcy","Business Associates are NOT permitted to:":"B. disclose protected health information outside of what is specified in the Business Associate Contract and the HIPAA regulations","The purpose of Administrative Simplification is all of the following EXCEPT:":"D. Allow individuals to transfer jobs and not be denied health insurance because of pre-existing conditions","Which of the following is true?":"D. A and C","The Security Rule’s requirements are organized into which of the following three categories:":"C. Administrative, Physical, and Technical safeguards","What is the purpose of Physical security safeguards?":"A. To provide security for physical facilities, computer systems, and associated equipment","The requirements of HIPAA Privacy include all of the following EXCEPT:":"E. Putting firewalls on all internet connections","Minimum Necessary Disclosure refers to:":"A. disclosing only the the minimum amount of PHI necessary to accomplish the intended purpose of the use or disclosure","Which of the following is a Technical Security?":"A. Passwords","The  Omnibus Rule was meant to strengthen and modernize HIPAA by incorporating provisions of the HITECH Act (Health Information Technology for Economic and Clinical Health Act) as well as finalizing, clarifying, and providing detailed guidance on many previous aspects of HIPAA":"A. True","Which of the following is NOT true regarding a business associate contract?":"E. Is optional depending on the type of protected health information received","When should you promote HIPAA awareness?":"C. The first step in the compliance process","Business Associates must comply with the HIPAA Privacy standards:":"C. If they routinely use, create, or distribute protected health information on behalf of a covered entity","A Business Associate Contract must specify the following?":"D. The PHI to be disclosed and the uses that may be made of that information","The acronym HIPAA stands for":"C. Health Insurance Portability and Accountability Act","Which of these entities is considered a covered entity?":"B. Health Plans and Health Insurance Carriers"}`
);
var flag = true;

var save_function = () => {
  if (flag) {
    if (dict[$('.finalexamquestion').text()] !== undefined) {
      $('#rblAnswers label').each((k, v) => {
        if (
          dict[$('.finalexamquestion').text()].slice(0, 2) ===
          $(v).text().trim().slice(0, 2)
        ) {
          setTimeout(() => {
            $(v).trigger('click');
          }, 200);
        }
      });
    } else {
      setTimeout(() => {
        $($('.checkmark')[0]).trigger('click');
      }, 200);

      setTimeout(() => {
        $('#rblAnswers label').each((k, v) => {
          if ($('#lblCheckAnswerMessage').text() === 'Correct!') {
            $('.checkmark').each((k, v) => {
              if ($(v).css('opacity') === '1') {
                dict[$('.finalexamquestion').text()] = $(v)
                  .parent()

                  .text()

                  .trim();
              }
            });
          } else if (
            $('#lblCheckAnswerMessage').length > 0 &&
            $('#lblCheckAnswerMessage').text() !== '' &&
            $('#lblCheckAnswerMessage').text() != undefined &&
            $(v).text().trim().slice(0, 2) ==
              $('#lblCheckAnswerMessage').text().slice(-2)
          ) {
            dict[$('.finalexamquestion').text()] = $(v).text().trim();
          }
        });
      }, 800);
    }

    setTimeout(() => {
      $('#checkAnswerButton').trigger('click');
    }, 600);

    setTimeout(() => {
      $('#nextButton').trigger('click');
    }, 2000);

    setTimeout(() => {
      save_function();
    }, 3000);
  }
};
