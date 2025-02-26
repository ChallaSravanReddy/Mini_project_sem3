
class BhagavadGitaChatbot {
    constructor() {
        this.questions = [
            { question: "hi", answer: "Hello! How can I assist you today?" },
            { question: "hello", answer: "Hi there! Ready to explore the teachings of the Mahabharata?" },
            { question: "hey", answer: "Hey! What would you like to learn today?" },
            { question: "namaste", answer: "Namaste! How can I guide you on your journey of knowledge?" },
            { question: "greetings", answer: "Greetings! Let's dive into some ancient wisdom." },
            { question: "yo", answer: "Yo! Let's explore the fascinating world of the Mahabharata." },
            { question: "how are you", answer: "I'm here to help you learn! How can I assist you today?" },
            { question: "good morning", answer: "Good morning! Let's begin our journey with some wisdom from the Gita." },
            { question: "good afternoon", answer: "Good afternoon! How can I help you with your questions today?" },
            { question: "good evening", answer: "Good evening! Ready to delve into the teachings of Krishna?" },
            { question: "what's up", answer: "Not much! Just here to share knowledge. What can I do for you?" },
            { question: "can you help me", answer: "Of course! I'm here to guide you through the wisdom of the Mahabharata." },
            { question: "om shanti", answer: "Om Shanti! May peace be with you. How can I assist you?" },
            { question: "hare krishna", answer: "Hare Krishna! Let's explore the divine teachings together." },
            { question: "hello there", answer: "Hello! How can I help you learn more about the Mahabharata?" },
            { question: "welcome", answer: "Thank you! Let's embark on a journey through ancient stories and wisdom." },
            { question: "namaskar", answer: "Namaskar! What wisdom can I share with you today?" },
            { question: "howdy", answer: "Howdy! What would you like to know about the Mahabharata?" },
            { question: "jai shri krishna", answer: "Jai Shri Krishna! How can I assist you in learning today?" },
            { question: "what is the bhagavad gita", answer: "The Bhagavad Gita is a 700-verse Hindu scripture that is part of the Mahabharata, providing spiritual guidance through a dialogue between Krishna and Arjuna." },
            { question: "who is the author of bhagavad gita", answer: "The Bhagavad Gita is traditionally attributed to the sage Vyasa, who compiled the Mahabharata." },
            { question: "what is the main message of gita", answer: "The Gita emphasizes performing one's duty (dharma) without attachment to results, focusing on selfless action and spiritual wisdom." },
            { question: "what is the meaning of karma", answer: "Karma refers to the principle of cause and effect, where actions and intentions influence future outcomes and spiritual progress." },
            { question: "how to achieve peace according to gita", answer: "The Gita teaches that peace comes from detachment, self-realization, and devotion to the divine, transcending material desires." },
            { question: "what is the path of devotion", answer: "Bhakti Yoga is the path of devotion, involving loving surrender to God through pure love, worship, and spiritual dedication." },
            { question: "what is selfless action", answer: "Karma Yoga is selfless action, performing duties without ego or expectation of personal rewards, treating work as a form of spiritual practice." },
            { question: "what is the cosmic form of krishna", answer: "Krishna reveals his universal, cosmic form (Vishvarupa) to Arjuna, demonstrating his divine, all-encompassing nature beyond human comprehension." },
            { question: "what is kurukshetra", answer: "Kurukshetra is the battlefield where the Mahabharata war took place. It is also where Krishna delivered the Bhagavad Gita to Arjuna." },
            { question: "who are you", answer: "I am your friendly chatbot, here to help you explore the teachings of the Mahabharata and Bhagavad Gita." },
        { question: "what can you do", answer: "I can answer your questions about the Mahabharata, Bhagavad Gita, and help you with spiritual guidance and knowledge." },
        { question: "how can you help me", answer: "I can guide you through the wisdom of ancient scriptures and answer your queries about characters, events, and lessons from the Mahabharata." },
        { question: "what is your name", answer: "You can call me GitaBot, your guide to the Mahabharata and Bhagavad Gita." },
        { question: "where are you from", answer: "I reside in the realm of knowledge, ready to assist you at any time!" },
        { question: "how are you", answer: "I'm doing great! How can I assist you today?" },
        { question: "what is your purpose", answer: "My purpose is to help you learn about the Mahabharata and Bhagavad Gita and provide insights into their teachings." },
        { question: "can you tell me a story", answer: "Sure! I can share stories from the Mahabharata. Just let me know which one you'd like to hear!" },
        { question: "who is krishna", answer: "Krishna is a central figure in the Mahabharata and Bhagavad Gita, known as the eighth avatar of Vishnu and Arjuna’s divine guide." },
        { question: "who are the pandavas", answer: "The Pandavas are five brothers—Yudhishthira, Bhima, Arjuna, Nakula, and Sahadeva—who fought for dharma in the Kurukshetra war." },
        { question: "tell me about arjuna", answer: "Arjuna is a great warrior and one of the Pandava brothers. He is the central character in the Bhagavad Gita, where Krishna imparts spiritual wisdom to him." },
        { question: "what is the mahabharata", answer: "The Mahabharata is an ancient Indian epic that narrates the story of the Kurukshetra war and contains profound teachings on dharma, duty, and life." },
        { question: "what is the bhagavad gita", answer: "The Bhagavad Gita is a spiritual dialogue between Krishna and Arjuna, offering guidance on duty, righteousness, and the path to liberation." },
        { question: "why should i read the bhagavad gita", answer: "Reading the Bhagavad Gita provides insights into life’s purpose, self-realization, and how to live with peace and purpose." },
        { question: "tell me about dharma", answer: "Dharma refers to one’s duty and moral responsibilities. The Mahabharata emphasizes following dharma to maintain harmony and balance in life." },
        { question: "what is karma", answer: "Karma refers to actions and their consequences. The Gita teaches that one should perform their duties selflessly without attachment to results." },
        { question: "how to find peace", answer: "The Bhagavad Gita teaches that peace comes from self-realization, detachment from desires, and devotion to God." },
        { question: "what is moksha", answer: "Moksha is liberation from the cycle of birth and death. It is the ultimate spiritual goal in Hinduism." },
        { question: "can you tell me about kurukshetra", answer: "Kurukshetra is the battlefield where the Mahabharata war took place. It is also where Krishna delivered the Bhagavad Gita to Arjuna." },
        { question: "who is draupadi", answer: "Draupadi is the wife of the Pandavas and a central character in the Mahabharata, known for her strength and devotion to justice." },
        { question: "who is karna", answer: "Karna is a great warrior and the son of Kunti. He fought on the side of the Kauravas in the Mahabharata and is known for his generosity and valor." },
        { question: "what is the meaning of bhakti", answer: "Bhakti means devotion to God. It is a path of love and surrender to the divine, as emphasized in the Bhagavad Gita." },
        { question: "how to overcome fear", answer: "Krishna advises overcoming fear by understanding the eternal nature of the soul and focusing on one’s duties with faith and devotion." },
        { question: "tell me about the kauravas", answer: "The Kauravas are the cousins and rivals of the Pandavas, led by Duryodhana. They fought against the Pandavas in the Kurukshetra war." },
        { question: "what is sankhya yoga", answer: "Sankhya Yoga, as taught in the Bhagavad Gita, is the path of knowledge and self-inquiry, focusing on understanding the nature of the self and the universe." },
        { question: "how does the gita teach detachment", answer: "The Gita teaches detachment by emphasizing selfless action and focusing on duty without being attached to the results." },
        { question: "can you tell me a shloka", answer: "Certainly! Here’s a famous one: 'Karmanye vadhikaraste, Ma phaleshu kadachana'—You have the right to perform your duties but not to expect the fruits of your actions." },
        { question: "what is self-realization", answer: "Self-realization is understanding one’s true nature as the eternal soul, distinct from the body and mind, and connected to the divine." },
        { question: "who is vyasa", answer: "Vyasa is the sage who composed the Mahabharata and is traditionally credited with compiling the Vedas and the Bhagavad Gita." },
        { question: "what is the bhagavad gita", answer: "The Bhagavad Gita is a sacred Hindu scripture, part of the Mahabharata, where Lord Krishna imparts spiritual wisdom to Arjuna on the battlefield of Kurukshetra." },
        { question: "who wrote the bhagavad gita", answer: "The Bhagavad Gita is traditionally attributed to Vyasa, the sage who compiled the Mahabharata." },
        { question: "what is the main teaching of the gita", answer: "The main teachings of the Gita include selfless action (Karma Yoga), devotion (Bhakti Yoga), and the pursuit of knowledge (Jnana Yoga), emphasizing duty without attachment to results." },
        { question: "what is karma yoga", answer: "Karma Yoga is the path of selfless action, where one performs their duties without attachment to the outcomes." },
        { question: "what is bhakti yoga", answer: "Bhakti Yoga is the path of devotion and love for God, emphasizing surrender and wholehearted worship of the divine." },
        { question: "what is jnana yoga", answer: "Jnana Yoga is the path of knowledge and wisdom, focusing on self-inquiry and understanding the true nature of the self." },
        { question: "who is arjuna", answer: "Arjuna is a warrior prince and one of the Pandavas. He is the central character in the Bhagavad Gita, where Krishna guides him through a moral and spiritual dilemma." },
        { question: "who is krishna", answer: "Krishna is the speaker of the Bhagavad Gita, the Supreme God, and Arjuna’s charioteer, guiding him on the path of righteousness and spiritual enlightenment." },
        { question: "why did krishna give the gita to arjuna", answer: "Krishna gave the teachings of the Gita to Arjuna to help him overcome his doubts and confusion about fighting in the Kurukshetra war, emphasizing duty and righteousness." },
        { question: "what is dharma in the gita", answer: "Dharma refers to one’s moral duty and responsibilities. The Gita emphasizes performing one's dharma selflessly, according to one's role in life." },
        { question: "what is the nature of the soul", answer: "The Gita teaches that the soul (Atman) is eternal, unchanging, and indestructible, distinct from the physical body, which undergoes birth and death." },
        { question: "how can one achieve moksha", answer: "Moksha, or liberation, can be achieved by realizing the true nature of the self, practicing selfless action, devotion, and surrendering to God." },
        { question: "what is detachment according to gita", answer: "Detachment means performing one's duties without being emotionally attached to the results, maintaining equanimity in success and failure." },
        { question: "what is the significance of the gita", answer: "The Gita provides timeless wisdom on living a life of purpose, balance, and spirituality, guiding individuals on their path to self-realization and liberation." },
        { question: "what is the cosmic form of krishna", answer: "Krishna reveals his Vishvarupa, or cosmic form, to Arjuna, showing his universal, divine nature that encompasses all creation and destruction." },
        { question: "why is the gita still relevant today", answer: "The Gita's teachings on duty, ethics, and inner peace are timeless and help individuals navigate modern challenges with wisdom and clarity." },
        { question: "what does the gita say about fear", answer: "The Gita teaches that fear arises from attachment and ignorance. By realizing the eternal nature of the soul, one can overcome fear." },
        { question: "how does the gita define a yogi", answer: "A yogi is one who has mastered their mind, performs actions with detachment, and seeks spiritual union with the divine." },
        { question: "what is self-realization in the gita", answer: "Self-realization is understanding one's true identity as the eternal soul, beyond the body and mind, and recognizing one's unity with God." },
        { question: "what does the gita teach about meditation", answer: "The Gita emphasizes meditation as a means to control the mind, attain inner peace, and connect with the divine." },
        { question: "what is the purpose of life according to the gita", answer: "The Gita teaches that the purpose of life is to fulfill one's duties, seek self-realization, and ultimately attain spiritual liberation (Moksha)." },
        { question: "what is renunciation in the gita", answer: "Renunciation is giving up attachment to material desires and results of actions, focusing instead on spiritual goals and inner peace." },
        { question: "what is the role of faith in the gita", answer: "Faith is essential for spiritual progress. The Gita emphasizes trusting in God, surrendering to divine will, and following the path of righteousness." },
        { question: "what is the importance of action in the gita", answer: "Action is central to life. The Gita teaches that one should perform their duties without attachment, treating work as a form of worship." },
        { question: "how does the gita explain death", answer: "The Gita explains that death is a transition for the body, but the soul is eternal and never dies. The soul simply moves to another body." },
        { question: "how does the gita address desires", answer: "The Gita advises controlling desires, as attachment to desires leads to suffering. It advocates moderation and self-discipline." },
        { question: "what is the meaning of surrender in the gita", answer: "Surrender in the Gita means offering all actions to God, trusting in divine will, and letting go of ego and attachment." },
        { question: "how can the gita help in daily life", answer: "The Gita offers practical wisdom on how to live a balanced life, perform duties selflessly, and maintain inner peace amid challenges." },
        { question: "what is the importance of chapter 2 in the gita", answer: "Chapter 2, called Sankhya Yoga, introduces key teachings on the nature of the soul, duty, and the path of selfless action." },
        { question: "how does the gita teach balance", answer: "The Gita advocates a balanced life through moderation in actions, thoughts, and desires, emphasizing self-discipline and mindfulness." },
        { question: "what is the ultimate goal according to the gita", answer: "The ultimate goal is Moksha, or liberation, which is achieved through self-realization, devotion, and surrender to God." },
        { question: "how does the gita define success", answer: "The Gita defines success as fulfilling one's duties with dedication and detachment, focusing on the process rather than the results." },
        { question: "what is the meaning of devotion in the gita", answer: "Devotion (Bhakti) in the Gita is about loving surrender to God, seeing the divine in all aspects of life, and maintaining a connection with God." },
        { question: "how can one control the mind according to the gita", answer: "The Gita teaches that the mind can be controlled through meditation, self-discipline, and focusing on spiritual goals." },
        { question: "how does the gita address the concept of free will", answer: "The Gita acknowledges free will but emphasizes making choices aligned with dharma and spiritual growth." },
        { question: "what is the message of the gita for leaders", answer: "The Gita teaches leaders to act selflessly, make decisions based on righteousness, and prioritize the greater good over personal gain." },
        { question: "how does the gita define happiness", answer: "The Gita defines true happiness as inner peace and contentment, achieved through self-discipline, detachment, and spiritual wisdom." },
        { question: "what is the role of emotions in the gita", answer: "The Gita emphasizes mastering emotions through self-awareness, discipline, and detachment to achieve clarity and balance in life." },
        { question: "how does the gita explain the mind-body connection", answer: "The Gita highlights the mind's influence on the body, teaching that a disciplined mind leads to physical well-being and spiritual growth." },
        { question: "what is the gita's advice on dealing with failure", answer: "The Gita advises accepting failure with equanimity, learning from it, and continuing to perform one's duties without losing faith." },
        { question: "how does the gita describe the qualities of a wise person", answer: "A wise person, according to the Gita, is one who is free from attachment, desires, and fear, and maintains equanimity in all situations." },
        { question: "what does the gita say about wealth", answer: "The Gita teaches that wealth should be earned ethically and used selflessly for the welfare of others, without attachment or greed." },
        { question: "how does the gita address compassion", answer: "The Gita emphasizes compassion as a key virtue, urging individuals to act with kindness, empathy, and selflessness." },
        { question: "what is the role of prayer in the gita", answer: "Prayer in the Gita is a way to connect with the divine, seek guidance, and cultivate devotion and humility." },
        { question: "how does the gita describe the path to God", answer: "The Gita describes multiple paths to God, including selfless action (Karma Yoga), devotion (Bhakti Yoga), and knowledge (Jnana Yoga)." },
        { question: "what is the significance of Arjuna's dilemma", answer: "Arjuna's dilemma represents the moral and ethical struggles faced by individuals, highlighting the importance of guidance and self-reflection." },
        { question: "how does the gita view relationships", answer: "The Gita teaches that relationships should be based on duty, respect, and selflessness, free from attachment and expectations." },
        { question: "what does the gita say about desire", answer: "The Gita warns that uncontrolled desire leads to suffering and advises cultivating self-discipline and contentment." },
        { question: "how does the gita describe self-mastery", answer: "Self-mastery in the Gita involves controlling the mind and senses, acting with wisdom, and maintaining focus on spiritual goals." },
        { question: "what is the significance of humility in the gita", answer: "The Gita emphasizes humility as a key quality for spiritual growth, encouraging individuals to surrender ego and seek divine guidance." },
        { question: "how does the gita guide on making decisions", answer: "The Gita advises making decisions based on dharma (righteousness), detachment from outcomes, and consideration of the greater good." },
        { question: "what is the gita's view on time", answer: "The Gita views time as an eternal cycle, urging individuals to live in the present moment and perform their duties diligently." },
        { question: "how does the gita address loneliness", answer: "The Gita teaches that true companionship comes from a connection with the divine and encourages seeking solace in spiritual practice." },
        { question: "what does the gita say about forgiveness", answer: "The Gita advocates forgiveness as a virtue that leads to inner peace and spiritual growth, freeing individuals from anger and resentment." },
        { question: "how does the gita define success", answer: "Success in the Gita is defined as fulfilling one's duties with dedication and detachment, focusing on inner growth rather than external achievements." },
        { question: "how does the gita inspire courage", answer: "The Gita inspires courage by emphasizing faith in the divine, understanding the eternal nature of the soul, and performing one's duties fearlessly." },
        { question: "what does the gita say about food", answer: "The Gita categorizes food into three types—sattvic, rajasic, and tamasic—based on their effects on the body and mind, advocating a balanced, pure diet." },
        { question: "how does the gita address anger", answer: "The Gita teaches that anger arises from unfulfilled desires and can be controlled through self-discipline and mindfulness." },
        { question: "what is the role of sacrifice in the gita", answer: "Sacrifice in the Gita symbolizes selfless actions and offerings made for the welfare of others and spiritual progress." },
        { question: "how does the gita describe divine qualities", answer: "The Gita describes divine qualities such as compassion, truthfulness, humility, self-discipline, and devotion as essential for spiritual growth." },
        { question: "what is the gita's view on education", answer: "The Gita emphasizes the importance of both spiritual and worldly knowledge, encouraging lifelong learning and self-inquiry." },
        { question: "how does the gita describe maya", answer: "Maya, in the Gita, refers to the illusion of the material world that veils the true nature of reality and the self." },
        { question: "what is the role of gratitude in the gita", answer: "The Gita encourages gratitude as a way to cultivate humility, contentment, and a deeper connection with the divine." },
        { question: "how does the gita view work", answer: "The Gita views work as a means of selfless service and spiritual growth, emphasizing duty over personal gain." },
        { question: "what is the gita's teaching on contentment", answer: "The Gita teaches that contentment arises from self-awareness, detachment, and focusing on inner fulfillment rather than external achievements." },
        { question: "how does the gita explain attachment", answer: "The Gita explains that attachment leads to suffering and advocates detachment as a path to freedom and peace." },
        { question: "what is the gita's advice on balance", answer: "The Gita advises balancing work, rest, and spiritual practice, emphasizing moderation in all aspects of life." },
        { question: "how does the gita address doubt", answer: "The Gita addresses doubt by emphasizing faith in divine guidance, self-inquiry, and seeking wisdom from trusted sources." },
        { question: "what is the role of discipline in the gita", answer: "Discipline is essential in the Gita for controlling the mind and senses, achieving focus, and progressing on the spiritual path." },
        { question: "how does the gita define a hero", answer: "A hero, according to the Gita, is one who conquers the mind, acts selflessly, and remains steadfast in their duties and values." },
        { question: "what is the significance of faith in the gita", answer: "Faith is crucial in the Gita, as it fosters trust in divine guidance and strengthens one's resolve to follow the spiritual path." },
        { question: "how does the gita explain unity", answer: "The Gita teaches that all beings are interconnected and part of the divine, emphasizing unity in diversity." },
        { question: "what is the role of intention in the gita", answer: "The Gita emphasizes that actions should be performed with pure intentions, focusing on duty and service rather than personal gain." },
        { question: "what is the importance of the bhagavad gita in hinduism", answer: "The Bhagavad Gita is considered a foundational spiritual text in Hinduism, offering guidance on living a righteous life and attaining spiritual liberation." },
        { question: "how many chapters are in the bhagavad gita", answer: "The Bhagavad Gita consists of 18 chapters, each focusing on different aspects of life, duty, and spirituality." },
        { question: "what are the three paths in the bhagavad gita", answer: "The Gita discusses three main paths to liberation: Karma Yoga (path of action), Bhakti Yoga (path of devotion), and Jnana Yoga (path of knowledge)." },
        { question: "what does the gita say about wealth", answer: "The Gita teaches that wealth should be used responsibly and without attachment, emphasizing generosity and detachment from material possessions." },
        { question: "how does the gita define happiness", answer: "The Gita defines true happiness as inner peace and contentment, which comes from self-realization and detachment from desires." },
        { question: "what does the gita say about anger", answer: "The Gita warns that anger leads to confusion and loss of reason, ultimately resulting in self-destruction. It advises controlling anger through self-discipline." },
        { question: "who were the main listeners of the gita", answer: "Arjuna was the primary listener, but Sanjaya, through his divine vision, narrated the conversation to King Dhritarashtra." },
        { question: "what does the gita say about time", answer: "The Gita describes time as eternal and cyclical, emphasizing that everything in the material world is subject to the passage of time." },
        { question: "what is the role of maya in the gita", answer: "Maya is the illusion that veils the true nature of reality. The Gita teaches that overcoming maya is essential for self-realization." },
        { question: "how does the gita define liberation", answer: "Liberation, or Moksha, is the release from the cycle of birth and death, attained by realizing one’s unity with the divine." },
        { question: "what does the gita say about discipline", answer: "The Gita emphasizes the importance of discipline in controlling the mind and senses, leading to spiritual growth and inner peace." },
        { question: "what is the significance of krishna’s teachings", answer: "Krishna's teachings in the Gita provide timeless wisdom on how to live a balanced life, overcome challenges, and achieve spiritual enlightenment." },
        { question: "how does the gita address ego", answer: "The Gita teaches that ego is the root of attachment and suffering. Surrendering the ego is crucial for spiritual progress." },
        { question: "what is the relationship between gita and vedas", answer: "The Bhagavad Gita is considered a summary of the spiritual teachings found in the Vedas, focusing on practical application in daily life." },
        { question: "what does the gita teach about humility", answer: "The Gita emphasizes humility as a key virtue, advising individuals to remain humble regardless of their achievements." },
        { question: "what is the role of surrender in the gita", answer: "Surrendering to God is a central theme in the Gita, signifying trust in divine will and letting go of personal desires and fears." },
        { question: "how does the gita describe a wise person", answer: "A wise person, according to the Gita, is one who is free from attachment, remains calm in success and failure, and sees the divine in all beings." },
        { question: "what is the significance of chapter 18 in the gita", answer: "Chapter 18 summarizes the entire Gita, focusing on renunciation, duty, and the paths to liberation." },
        { question: "what is the gita’s view on destiny", answer: "The Gita acknowledges destiny but emphasizes free will and personal effort in shaping one's life." },
        { question: "what is the role of devotion in self-realization", answer: "Devotion, or Bhakti, plays a crucial role in self-realization, fostering a deep connection with the divine and surrendering ego." },
        { question: "how does the gita describe a true devotee", answer: "A true devotee, according to the Gita, is humble, selfless, detached from material desires, and fully devoted to God." },
        { question: "what is the importance of self-control in the gita", answer: "The Gita highlights self-control as essential for mastering the mind and senses, leading to a disciplined and focused life." },
        { question: "what does the gita say about forgiveness", answer: "The Gita encourages forgiveness as a virtue, teaching that holding onto anger and resentment hinders spiritual growth." },
        { question: "what is the significance of krishna’s universal form", answer: "Krishna’s universal form, or Vishvarupa, reveals his divine, all-encompassing nature, showcasing the interconnectedness of all creation." },
        { question: "how does the gita explain detachment from results", answer: "The Gita teaches that one should focus on performing their duties without being attached to the outcomes, leading to inner peace and freedom." },
        { question: "what does the gita say about equality", answer: "The Gita teaches that all beings are equal as they share the same divine essence, encouraging respect and compassion for all." },
        { question: "how can one cultivate inner peace according to the gita", answer: "The Gita advises meditation, detachment from material desires, and surrender to God as paths to cultivating inner peace." },
        { question: "what is the importance of mindfulness in the gita", answer: "The Gita emphasizes mindfulness in actions and thoughts, teaching that living in the present moment leads to a balanced and fulfilling life." },
        { question: "how does the gita view worldly success", answer: "The Gita teaches that worldly success is temporary and advises seeking lasting fulfillment through spiritual growth and self-realization." },
        { question: "what is the role of compassion in the gita", answer: "Compassion is highlighted in the Gita as a key virtue, encouraging individuals to act with kindness and empathy towards others." },
        { question: "how does the gita address conflicts of duty", answer: "The Gita provides guidance on resolving conflicts of duty by focusing on dharma, selflessness, and seeking divine guidance." },
        { question: "what is the role of nature in the gita", answer: "The Gita discusses the concept of Prakriti (nature), emphasizing its role in the material world and its interplay with the soul." },
        { question: "how does the gita explain the concept of rebirth", answer: "The Gita teaches that the soul is eternal and takes on new bodies through cycles of birth and rebirth based on past karma." },
        { question: "what is the significance of meditation in the gita", answer: "Meditation is essential for calming the mind, connecting with the divine, and achieving spiritual clarity, as emphasized in the Gita." },
        { question: "what does the gita say about wisdom", answer: "The Gita values wisdom as the highest form of knowledge, guiding individuals toward self-realization and liberation." },
        { question: "how does the gita teach balance in life", answer: "The Gita advocates balance in all aspects of life, including work, rest, and spiritual practice, to maintain harmony and well-being." },
        { question: "what is the importance of truth in the gita", answer: "The Gita emphasizes truthfulness as a fundamental virtue, encouraging individuals to align their actions and thoughts with truth." },
        { question: "how does the gita explain the purpose of the universe", answer: "The Gita teaches that the universe is a manifestation of the divine, created for souls to evolve and ultimately unite with God." },
        { question: "what does the gita say about loyalty", answer: "The Gita values loyalty to dharma and one’s spiritual path, highlighting its importance in achieving spiritual growth." },
        { question: "how does the gita define courage", answer: "Courage, according to the Gita, is acting fearlessly in alignment with one’s dharma, trusting in divine support and guidance." },
        { question: "what is the significance of selflessness in the gita", answer: "The Gita teaches that selflessness purifies the soul, helping individuals perform actions without ego and for the greater good." },
        { question: "what does the gita teach about patience", answer: "The Gita advises patience as a virtue, helping individuals endure challenges with composure and faith in divine timing." },
        { question: "how does the gita address doubts", answer: "The Gita encourages seeking wisdom and surrendering to God to overcome doubts and find clarity on the spiritual path." },
        { question: "what is the role of determination in the gita", answer: "Determination is crucial in the Gita, guiding individuals to persist in their spiritual practice despite obstacles." },
        { question: "how does the gita describe spiritual progress", answer: "Spiritual progress in the Gita involves developing virtues like self-control, wisdom, and devotion, leading to liberation."},
            { 
                question: "who is arjuna", 
                answer: "Arjuna is a prince of the Pandavas, a skilled warrior, and the central character in the Bhagavad Gita who receives spiritual guidance from Krishna." 
            },
            { 
                question: "what is a shloka", 
                answer: "A Shloka is a verse or stanza often used in ancient Sanskrit texts. The Bhagavad Gita contains 700 shlokas that convey spiritual teachings." 
            },
            { 
                question: "what is the role of krishna in gita", 
                answer: "Krishna acts as Arjuna’s charioteer and spiritual guide, teaching him about duty, devotion, and the eternal nature of the soul." 
            },
            { 
                question: "why is kurukshetra important", 
                answer: "Kurukshetra is significant as the site of the epic Mahabharata war and the setting for Krishna's teachings in the Bhagavad Gita." 
            },
            { 
                question: "what is vishvarupa", 
                answer: "Vishvarupa, or the cosmic form, is the universal form of Krishna, revealed to Arjuna, displaying his omnipresence and divine power." 
            },
            { 
                question: "what are the key teachings of gita", 
                answer: "The Gita teaches about duty (dharma), selfless action (Karma Yoga), devotion (Bhakti Yoga), and the immortality of the soul." 
            },
            { 
                question: "who are the pandavas", 
                answer: "The Pandavas are the five brothers—Yudhishthira, Bhima, Arjuna, Nakula, and Sahadeva—who fought against the Kauravas in the Mahabharata war." 
            },
            { 
                question: "what is the essence of bhakti yoga", 
                answer: "Bhakti Yoga is the path of devotion and love for God, emphasizing surrender and seeing God in all aspects of life." 
            },
            { 
                question: "what is karma phala", 
                answer: "Karma Phala refers to the fruits of actions. The Gita teaches detachment from the results of actions, focusing on duty alone." 
            },
            { 
                question: "how does krishna describe the soul", 
                answer: "Krishna describes the soul as eternal, unchanging, and indestructible, unaffected by birth or death." 
            },
            { 
                question: "what is dharma according to gita", 
                answer: "Dharma is one's duty and moral responsibility. The Gita emphasizes following one's dharma without attachment to outcomes." 
            },
            { 
                question: "what is jnana yoga", 
                answer: "Jnana Yoga is the path of knowledge and wisdom, focusing on self-inquiry and realizing the true nature of the self." 
            },
            { 
                question: "what does krishna say about fear", 
                answer: "Krishna advises Arjuna to overcome fear through self-realization, devotion, and understanding the eternal nature of the soul." 
            },
            { 
                question: "what is renunciation in gita", 
                answer: "Renunciation (Sannyasa) is giving up attachment to material desires and results of actions, focusing instead on spiritual goals." 
            },
            { 
                question: "what is sankhya yoga", 
                answer: "Sankhya Yoga, as explained in the Gita, refers to the path of wisdom and discernment between the physical and spiritual realities." 
            },
            { 
                question: "what is the significance of karma", 
                answer: "Karma, or action, is central to life. The Gita teaches that one should perform righteous actions without attachment to the results." 
            },
            { 
                question: "why did arjuna hesitate to fight", 
                answer: "Arjuna hesitated to fight because he faced moral dilemmas about killing his relatives and teachers in the war." 
            },
            { 
                question: "what is krishna's advice to arjuna", 
                answer: "Krishna advises Arjuna to fulfill his duty as a warrior, practice detachment, and seek refuge in devotion and self-knowledge." 
            },
            { 
                question: "what is the final message of gita", 
                answer: "Krishna's final message to Arjuna is to surrender to God, perform duties without attachment, and trust in divine guidance." 
            },
            { question: "what is the importance of meditation", answer: "Meditation in the Gita is crucial for controlling the mind, achieving self-realization, and connecting with the divine consciousness." },
            { question: "what is liberation according to gita", answer: "Moksha (liberation) is freedom from the cycle of birth and death, achieved through spiritual knowledge, detachment, and union with the divine." },
            
                    { question: "what is the importance of the bhagavad gita", answer: "The Bhagavad Gita is one of the most important spiritual texts, offering profound teachings on duty, devotion, and the nature of the self." },
                    { question: "what is karma yoga in gita", answer: "Karma Yoga is the path of selfless action, where one performs duties without attachment to the results." },
                    { question: "what does krishna say about dharma", answer: "Krishna teaches that following one's dharma is essential for spiritual progress and maintaining cosmic balance." },
                    { question: "how does krishna explain the nature of the soul", answer: "Krishna explains that the soul is eternal, indestructible, and transcends the physical body." },
                    { question: "what is the meaning of moksha", answer: "Moksha is liberation from the cycle of birth, death, and rebirth. It is the ultimate goal of spiritual practice in Hinduism." },
                    { question: "what is the significance of the kurukshetra war", answer: "The Kurukshetra war symbolizes the battle between good and evil, and serves as the backdrop for the teachings of the Bhagavad Gita." },
                    { question: "who are the kauravas", answer: "The Kauravas are the 100 sons of Dhritarashtra who fought against the Pandavas in the Kurukshetra war." },
                    { question: "what is the role of a charioteer in the gita", answer: "In the Gita, Krishna acts as Arjuna’s charioteer, guiding him not only in battle but in matters of life, duty, and spirituality." },
                    { question: "what is the meaning of yoga in gita", answer: "In the Bhagavad Gita, Yoga refers to the union of the individual soul with the supreme, achieved through various practices like devotion, knowledge, and selfless action." },
                    { question: "how does krishna describe the universe", answer: "Krishna reveals to Arjuna that the universe is part of his divine, cosmic form, showing that all beings are his manifestations." },
                    { question: "what is the significance of the 18th chapter", answer: "Chapter 18 of the Bhagavad Gita summarizes all the teachings, focusing on renunciation, the importance of duty, and the path to liberation." },
                    { question: "what is the meaning of bhakti", answer: "Bhakti is devotion to God. In the Gita, Bhakti Yoga is described as the most direct and powerful path to spiritual realization." },
                    { question: "how does krishna describe the material world", answer: "Krishna explains that the material world is temporary and ever-changing, while the soul is eternal and unaffected by the physical realm." },
                    { question: "what is the meaning of vairagya", answer: "Vairagya refers to renunciation or detachment, which is the freedom from attachment to worldly desires and results." },
                    { question: "what is the role of a guru in the gita", answer: "A guru is essential in guiding the seeker on the path of wisdom and spiritual growth, as emphasized in the Gita." },
                    { question: "what is the nature of the self according to gita", answer: "The self, or Atman, is eternal and unchanging. It is distinct from the physical body and mind." },
                    { question: "how does krishna define a yogi", answer: "A yogi, according to Krishna, is one who has mastered the mind and remains detached from the fruits of action." },
                    { question: "what is the importance of the battle of kurukshetra", answer: "The battle of Kurukshetra represents the struggle between righteousness (dharma) and unrighteousness (adharma), and it is where Arjuna receives the teachings of the Gita." },
                    { question: "what is the meaning of ahimsa in the gita", answer: "Ahimsa means non-violence, a core teaching in the Gita, urging individuals to avoid harm to others through thought, word, and deed." },
                    { question: "how did krishna convince arjuna to fight", answer: "Krishna convinces Arjuna to fight by explaining the immortality of the soul, the duty of a warrior, and the greater purpose of the war." },
                    { question: "what is the role of the mind in the gita", answer: "The mind is seen as both the source of bondage and liberation. Krishna teaches that mastering the mind is essential for spiritual progress." },
                    { question: "what does krishna say about desire", answer: "Krishna advises Arjuna to control desires, as attachment to desires leads to suffering and prevents spiritual growth." },
                    { question: "how can one achieve peace according to the gita", answer: "One can achieve peace through self-realization, detachment, devotion, and performing one’s duty without attachment to outcomes." },
                    { question: "what is the significance of chapter 2", answer: "Chapter 2, known as Sankhya Yoga, outlines the philosophical foundation of the Gita, discussing the nature of the soul and the importance of selfless action." },
                    { question: "what is the role of krishna in the battle", answer: "Krishna serves as Arjuna’s charioteer and spiritual guide, directing him on both physical and spiritual matters during the battle." },
                    { question: "what does krishna teach about fear", answer: "Krishna teaches that fear arises from attachment and ignorance. By understanding the eternal nature of the soul, one can overcome fear." },
                    { question: "what is the meaning of surrender in the gita", answer: "Surrendering to God involves relinquishing control, trusting in divine will, and dedicating all actions to God." },
                    { question: "what is the concept of dharma in the gita", answer: "Dharma is one's moral duty and responsibility in life. The Gita teaches the importance of following one’s dharma in all situations." },
                    { question: "what is the nature of the supreme being", answer: "The supreme being, as described by Krishna, is beyond form, all-pervasive, and the source of all creation, maintenance, and destruction in the universe." },
                    { question: "what is the path of jnana yoga", answer: "Jnana Yoga is the path of wisdom and knowledge, focused on self-inquiry and understanding the true nature of the self and the universe." },
                    { question: "what is the role of action in the gita", answer: "Action is essential in the Gita. Krishna teaches that one should perform their duty without attachment to the results." },
                    { question: "how does krishna explain death", answer: "Krishna explains that death is not the end, as the soul is eternal and only the body perishes. The soul is never born and never dies." },
                    { question: "what is the role of the material world", answer: "The material world is a temporary space where souls experience life and learn lessons, but it is not the ultimate reality." },
                    { question: "what is the purpose of the bhagavad gita", answer: "The purpose of the Bhagavad Gita is to provide spiritual wisdom and guidance, teaching individuals how to live a righteous life and attain liberation." },
                    { question: "how does krishna describe the mind", answer: "Krishna explains that the mind is restless and difficult to control. Through discipline and meditation, one can master the mind." },
                    { question: "what is the importance of devotion in the gita", answer: "Devotion (Bhakti) is considered the most powerful and direct path to attaining liberation and connecting with God." },
                    { question: "what is the significance of chapter 3", answer: "Chapter 3, known as Karma Yoga, emphasizes the importance of selfless action and performing one's duty without attachment to the results." },
                    { question: "what is the difference between body and soul", answer: "The body is temporary and perishable, while the soul is eternal, indestructible, and unaffected by death or physical changes." },
                    { question: "how does krishna explain the law of cause and effect", answer: "Krishna teaches that actions have consequences. Good actions lead to positive results, while bad actions lead to suffering." },
                    { question: "what is the meaning of self-realization", answer: "Self-realization is understanding one’s true nature as the eternal soul, beyond the body and mind, and realizing the oneness with the divine." },
                    { question: "what is the significance of detachment in the gita", answer: "Detachment means performing one's duties without attachment to the outcomes. It leads to inner peace and liberation." },
                    { question: "what is the importance of meditation in the gita", answer: "Meditation helps in controlling the mind, focusing on the divine, and attaining inner peace. Krishna advises practicing meditation for spiritual growth." },
                    { question: "what is the meaning of dharma in the context of kurukshetra", answer: "In the context of Kurukshetra, Dharma refers to the righteous duty of Arjuna to fight in the war to restore justice and righteousness." },
                            { question: "why should we read the bhagavad gita", answer: "The Bhagavad Gita provides timeless wisdom, offering solutions to life's problems and guiding us on the path of self-realization, duty, and spiritual growth." },
                            { question: "what is the purpose of reading bhagavad gita", answer: "Reading the Bhagavad Gita helps us understand the nature of the self, the importance of duty, and how to live a righteous and meaningful life." },
                            { question: "how does bhagavad gita help in overcoming challenges", answer: "The Gita teaches us to face life's challenges with a calm mind, detachment, and devotion, showing us how to rise above obstacles with wisdom." },
                            { question: "why is bhagavad gita considered important", answer: "The Bhagavad Gita is considered important because it contains the divine teachings of Krishna, offering practical advice on how to lead a spiritually fulfilling life." },
                            { question: "how can bhagavad gita improve mental peace", answer: "The teachings of the Gita help cultivate detachment, discipline, and inner balance, which contribute to mental peace and tranquility." },
                            { question: "what does bhagavad gita teach about self-realization", answer: "The Gita teaches that self-realization is the understanding of one’s true nature as the eternal soul (Atman), distinct from the physical body." },
                            { question: "why is bhagavad gita relevant today", answer: "The Bhagavad Gita is relevant today because its teachings on duty, morality, and spirituality address the timeless challenges faced by people in modern life." },
                            { question: "how does bhagavad gita help in finding purpose", answer: "The Gita helps us find our purpose by guiding us to perform our duties selflessly and by understanding our deeper connection to the divine." },
                            { question: "how does bhagavad gita teach about karma", answer: "The Gita teaches that actions (karma) should be performed without attachment to the results, promoting selfless action as a means to spiritual growth." },
                            { question: "how can the bhagavad gita help in dealing with stress", answer: "The Gita advises focusing on the present moment, performing one's duty without attachment, and meditating, all of which can help reduce stress." },
                            { question: "why should one read bhagavad gita every day", answer: "Reading the Bhagavad Gita every day can help build a disciplined mind, connect with the divine, and deepen our understanding of life’s purpose." },
                            { question: "how does bhagavad gita explain the nature of the soul", answer: "The Gita teaches that the soul (Atman) is eternal, indestructible, and beyond birth and death. It transcends the physical body." },
                            { question: "what is the importance of dharma according to bhagavad gita", answer: "Dharma, or righteousness, is the foundation of the Gita’s teachings. It emphasizes performing one’s duties with integrity and in alignment with cosmic law." },
                            { question: "what is the role of devotion in the bhagavad gita", answer: "Devotion (Bhakti) is emphasized in the Gita as the most powerful means of attaining liberation and connecting with God." },
                            { question: "how does bhagavad gita help in personal growth", answer: "The Gita helps in personal growth by guiding individuals towards self-discipline, mental focus, and spiritual awareness, fostering both inner and outer progress." },
                            { question: "how does bhagavad gita help in overcoming fear", answer: "The Gita teaches that fear can be overcome by realizing the eternal nature of the soul, focusing on one's duties, and surrendering to divine guidance." },
                            { question: "what does the bhagavad gita say about the mind", answer: "The Gita explains that the mind is restless and difficult to control, but with discipline, meditation, and self-awareness, one can master it." },
                            { question: "why is bhagavad gita considered a spiritual guide", answer: "The Gita is considered a spiritual guide because it offers practical advice on living a balanced life, understanding one’s true self, and attaining spiritual liberation." },
                            { question: "how can bhagavad gita help in developing self-discipline", answer: "The Gita encourages self-discipline through meditation, detachment from desires, and focusing on one’s duties, all of which build inner strength and control." },
                            { question: "why is bhagavad gita referred to as a dialogue", answer: "The Bhagavad Gita is a dialogue between Lord Krishna and Arjuna, where Krishna imparts wisdom to Arjuna in response to his doubts and struggles." },
                            { question: "how does bhagavad gita teach about action", answer: "The Gita teaches that one should perform actions with dedication and without attachment to outcomes, focusing on the present task and acting with a pure heart." },
                            { question: "how does bhagavad gita address the concept of life and death", answer: "The Gita explains that the soul is eternal and cannot die, while the physical body is temporary and subject to change." },
                            { question: "what is the significance of karma yoga", answer: "Karma Yoga, as taught in the Gita, emphasizes selfless action without attachment to the results, leading to spiritual growth and inner peace." },
                            { question: "how can reading bhagavad gita lead to enlightenment", answer: "By following the teachings in the Gita, one can overcome ignorance, develop wisdom, and achieve a higher state of consciousness, leading to enlightenment." },
                            { question: "how does bhagavad gita explain the concept of attachment", answer: "The Gita teaches that attachment to desires and outcomes creates suffering. Detachment is the key to peace and spiritual freedom." },
                            { question: "why does the bhagavad gita focus on duty", answer: "The Gita emphasizes duty (dharma) because it is essential for maintaining balance and harmony in life and fulfilling one's purpose." },
                            { question: "what is the relationship between krishna and arjuna in bhagavad gita", answer: "Krishna is Arjuna’s charioteer, spiritual guide, and friend. He imparts divine wisdom to Arjuna in the Gita to help him fulfill his duty." },
                            { question: "how does bhagavad gita encourage meditation", answer: "The Gita encourages meditation as a way to calm the mind, focus on the divine, and achieve inner peace and spiritual clarity." },
                            { question: "what is the meaning of surrender in the bhagavad gita", answer: "Surrender in the Gita means to give up ego, trust in divine will, and dedicate all actions to God, leading to liberation." },
                            { question: "how does bhagavad gita explain the concept of god", answer: "The Gita teaches that God is the supreme, omnipresent, and formless being. Krishna reveals his divine universal form to Arjuna in the text." },
                            { question: "why is the bhagavad gita considered a timeless text", answer: "The Gita is considered timeless because its teachings transcend time, offering universal wisdom on spirituality, ethics, and living a meaningful life." },
                            { question: "how does bhagavad gita teach about life after death", answer: "The Gita explains that the soul is eternal, and life after death is a continuation of the soul's journey, influenced by past actions (karma)." },
                            { question: "why does the bhagavad gita emphasize the importance of selfless action", answer: "Selfless action purifies the mind and spirit, leading to spiritual growth, liberation, and a deeper connection with the divine." },
                            { question: "how does bhagavad gita help in achieving peace of mind", answer: "By teaching detachment from desires, focusing on the present, and surrendering to divine will, the Gita helps achieve lasting peace of mind." },
                            { question: "what is the importance of chapter 2 in the bhagavad gita", answer: "Chapter 2 of the Gita introduces the key concepts of duty, selfless action, and the nature of the soul, laying the foundation for the entire text." },
                            { question: "how does bhagavad gita describe the path of knowledge", answer: "The Gita describes the path of knowledge (Jnana Yoga) as understanding the true nature of the self, overcoming ignorance, and realizing oneness with the divine." },
                            { question: "how does bhagavad gita teach the concept of free will", answer: "The Gita teaches that while we have free will, we must make choices aligned with our dharma and spiritual growth." },
                            { question: "what is the role of faith in bhagavad gita", answer: "Faith is essential in the Gita, as it enables one to trust in God, surrender to divine will, and follow the path to liberation." },
                            { question: "how can bhagavad gita be applied in daily life", answer: "The Gita can be applied by practicing selfless action, maintaining mental discipline, focusing on one's duties, and cultivating devotion to God." },
                        
                                    { question: "what is the mahabharata", answer: "The Mahabharata is one of the two major Sanskrit epics of ancient India, telling the story of the Kurukshetra War and the fates of the Kaurava and Pandava brothers." },
                                    { question: "who wrote the mahabharata", answer: "The Mahabharata is traditionally attributed to the sage Vyasa, who is also credited with composing the Bhagavad Gita." },
                                    { question: "how many chapters are in the mahabharata", answer: "The Mahabharata consists of 18 parvas (books or sections) with over 100,000 verses, making it one of the longest epics in world literature." },
                                    { question: "what is the significance of the mahabharata", answer: "The Mahabharata is not just a historical epic but a text that explores complex themes like dharma (duty), righteousness, loyalty, and the consequences of war." },
                                    { question: "who are the main characters of the mahabharata", answer: "The main characters include the Pandavas (Yudhishthira, Bhima, Arjuna, Nakula, and Sahadeva), the Kauravas (Duryodhana, Dushasana), and key figures like Krishna, Draupadi, and Karna." },
                                    { question: "what is the story of the kurukshetra war", answer: "The Kurukshetra war is the central conflict of the Mahabharata, fought between the Kauravas and Pandavas, with both sides vying for control of the kingdom of Hastinapura." },
                                    { question: "who is arjuna", answer: "Arjuna is one of the Pandava brothers, a skilled archer and warrior. He is the central figure in the Bhagavad Gita, where he receives spiritual teachings from Krishna." },
                                    { question: "who is yudhishthira", answer: "Yudhishthira is the eldest of the Pandava brothers, known for his wisdom, sense of justice, and adherence to dharma (righteousness)." },
                                    { question: "who is bhima", answer: "Bhima is the second Pandava, known for his immense strength and his role as a fierce warrior during the Kurukshetra war." },
                                    { question: "who is nakula", answer: "Nakula is the fourth Pandava, known for his beauty, bravery, and expertise in swordsmanship and horse care." },
                                    { question: "who is sahadeva", answer: "Sahadeva is the youngest of the Pandava brothers, known for his wisdom and knowledge of astrology." },
                                    { question: "who is draupadi", answer: "Draupadi is the wife of the five Pandavas and one of the central female characters in the Mahabharata. She is known for her beauty, strength, and devotion to justice." },
                                    { question: "who is duryodhana", answer: "Duryodhana is the eldest of the Kaurava brothers, known for his ambition and rivalry with the Pandavas, which ultimately leads to the Kurukshetra war." },
                                    { question: "who is karna", answer: "Karna is a great warrior, a friend of Duryodhana, and the tragic hero of the Mahabharata. He was born to Kunti, the mother of the Pandavas, but raised by a charioteer." },
                                    { question: "what is the role of krishna in the mahabharata", answer: "Krishna is a central figure in the Mahabharata, serving as Arjuna's charioteer and spiritual guide, and playing a pivotal role in the events leading up to the war." },
                                    { question: "what is the game of dice in the mahabharata", answer: "The game of dice (Dyutakrida) is a key event in the Mahabharata where Yudhishthira, the eldest Pandava, is tricked into gambling away his kingdom, his brothers, and himself." },
                                    { question: "what is the significance of the bhagavad gita", answer: "The Bhagavad Gita is a spiritual dialogue between Krishna and Arjuna during the Kurukshetra war, addressing duty, righteousness, devotion, and the nature of the soul." },
                                    { question: "what is dharma in the mahabharata", answer: "Dharma refers to righteousness and moral duty. The Mahabharata emphasizes the importance of following one's dharma, even when faced with difficult choices." },
                                    { question: "what is the significance of the mahabharata war", answer: "The Mahabharata war symbolizes the battle between good (dharma) and evil (adharma), with the fate of the world depending on the outcome." },
                                    { question: "what is the role of shikhandi in the mahabharata", answer: "Shikhandi plays a key role in the Mahabharata war, being instrumental in the death of Bhishma, the Kaurava commander, by serving as a shield for Arjuna." },
                                    { question: "who is bhishma", answer: "Bhishma is one of the greatest warriors in the Mahabharata, known for his vow of celibacy and unwavering loyalty to the throne of Hastinapura." },
                                    { question: "what is the story of the birth of karna", answer: "Karna was born to Kunti, the mother of the Pandavas, before her marriage. She used a boon to invoke the sun god, resulting in the birth of Karna, who was abandoned and raised by a charioteer." },
                                    { question: "who is gandhari", answer: "Gandhari is the mother of the Kauravas, who blindfolded herself her entire life out of devotion to her blind husband, Dhritarashtra." },
                                    { question: "what is the significance of draupadi's insult", answer: "Draupadi's insult by Dushasana during the dice game is a pivotal moment in the Mahabharata, leading to the Pandavas' exile and the eventual war." },
                                    { question: "how does bhagavad gita relate to the mahabharata", answer: "The Bhagavad Gita is a conversation between Krishna and Arjuna during the Mahabharata war, where Krishna provides Arjuna with spiritual and philosophical guidance." },
                                    { question: "who is vyasa", answer: "Vyasa is the sage who is credited with composing the Mahabharata and the Bhagavad Gita. He is also responsible for compiling the Vedas." },
                                    { question: "what is the role of the brahmin in the mahabharata", answer: "Brahmins in the Mahabharata are scholars, priests, and advisors. Key figures like Vyasa, Drona, and Kripacharya serve as mentors and guides to the warriors." },
                                    { question: "what is the significance of the mahabharata's lessons", answer: "The Mahabharata imparts lessons on morality, justice, and the complexities of human relationships, exploring themes like loyalty, duty, and the consequences of actions." },
                                    { question: "who is dronacharya", answer: "Dronacharya is a teacher of the Kauravas and Pandavas, known for his expertise in military arts. He played a key role in the events of the Kurukshetra war." },
                                    { question: "who is kripacharya", answer: "Kripacharya is a revered teacher and mentor to both the Kauravas and Pandavas. He was one of the few survivors of the Mahabharata war." },
                                    { question: "how did the mahabharata end", answer: "The Mahabharata ends with the victory of the Pandavas, the defeat of the Kauravas, and the eventual departure of the Pandavas from the earthly realm to attain their final destination." },
                                    { question: "what are the teachings of bhishma", answer: "Bhishma's teachings, especially those given to Yudhishthira, emphasize the importance of dharma, sacrifice, loyalty, and righteousness." },
                                    { question: "what is the story of the gita's teachings", answer: "The Bhagavad Gita presents Krishna's teachings to Arjuna on the battlefield of Kurukshetra, discussing duty, devotion, and the paths of knowledge, action, and devotion." },
                                    { question: "who was the most powerful warrior in the mahabharata", answer: "The most powerful warrior in the Mahabharata was Bhishma, known for his invincibility in battle due to his boon of being unconquerable until he chose to fall." },
                                    { question: "what role did divine intervention play in the mahabharata", answer: "Divine intervention, especially through figures like Krishna, played a critical role in guiding the Pandavas, ensuring their victory in the war, and shaping the course of events." },
                                    { question: "what was the curse of shiva", answer: "The curse of Shiva is a significant event in the Mahabharata that affects several characters, including Karna, leading to the tragic downfall of certain key figures." },
                                    { question: "why did the pandavas go into exile", answer: "The Pandavas were forced into exile after losing a rigged game of dice, which was a scheme by the Kauravas to"},
                            
            { question: "who is arjuna", answer: "Arjuna is a central character in the Mahabharata and the Bhagavad Gita, a skilled warrior and Pandava prince who receives spiritual guidance from Krishna." },
            { question: "what are the three paths in gita", answer: "The Gita describes three main paths to spiritual realization: Karma Yoga (path of action), Bhakti Yoga (path of devotion), and Jnana Yoga (path of knowledge)." },
            { question: "what is dharma", answer: "Dharma is a fundamental concept meaning duty, righteousness, cosmic order, and the inherent nature of an individual's responsibilities." },
            { question: "how many chapters in bhagavad gita", answer: "The Bhagavad Gita contains 18 chapters, each focusing on different aspects of spiritual wisdom and philosophical teachings." },
            { question: "what is the setting of bhagavad gita", answer: "The Gita is set on the battlefield of Kurukshetra, where Krishna provides spiritual counsel to Arjuna before the great war begins." },
            { question: "what is atman", answer: "Atman is the eternal, individual soul or self, which is immortal and distinct from the physical body, according to Vedantic philosophy." },
            { question: "what is brahman", answer: "Brahman is the ultimate, absolute reality or universal soul, the supreme cosmic principle that encompasses all existence." },
            { question: "how to control mind", answer: "The Gita suggests controlling the mind through meditation, detachment, self-discipline, and focusing on the divine." },
            { question: "what is yoga according to gita", answer: "In the Gita, Yoga is a spiritual discipline for self-realization, encompassing various paths of mental and spiritual practice." },
            { question: "what is the importance of knowledge", answer: "The Gita emphasizes spiritual knowledge as a crucial means to understand oneself, the divine, and achieve liberation." }
        ];

        this.initializeChat();
    }

    initializeChat() {
        this.chatbox = document.querySelector(".chatbox");
        this.chatInput = document.querySelector(".chat-input textarea");
        this.sendBtn = document.querySelector("#send-btn");
        this.chatbotToggler = document.querySelector(".chatbot-toggler");
        this.closeBtn = document.querySelector(".close-btn");

        this.addEventListeners();
    }

    addEventListeners() {
        this.sendBtn.addEventListener("click", () => this.handleChat());
        this.chatInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                this.handleChat();
            }
        });
        this.closeBtn.addEventListener("click", () => this.toggleChatbot(false));
        this.chatbotToggler.addEventListener("click", () => this.toggleChatbot(true));
    }
    
    toggleChatbot(show) {
        document.body.classList.toggle("show-chatbot", show);
    }
    
    removeChatbot(remove){
        document.body.classList.remove("show-chatbot", remove);
    }

    findBestMatch(userInput) {
        // Normalize input
        const normalizedInput = userInput.toLowerCase().trim();

        // Exact match
        const exactMatch = this.questions.find(q => 
            normalizedInput === q.question.toLowerCase().trim()
        );
        if (exactMatch) return exactMatch.answer;

        // Partial match
        const partialMatch = this.questions.find(q => 
            q.question.toLowerCase().includes(normalizedInput)
        );
        if (partialMatch) return partialMatch.answer;

        // Multiple word match
        const multiWordMatch = this.questions.find(q => 
            normalizedInput.split(' ').every(word => 
                q.question.toLowerCase().includes(word)
            )
        );
        if (multiWordMatch) return multiWordMatch.answer;

        return "I'm sorry, I couldn't find a specific answer to your question about the Bhagavad Gita. Could you rephrase or ask something else?";
    }

    createChatElement(message, className) {
        const chatLi = document.createElement("li");
        chatLi.classList.add("chat", className);
        chatLi.innerHTML = className === "outgoing" 
            ? `<p>${message}</p>` 
            : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
        return chatLi;
    }

    handleChat() {
        const userMessage = this.chatInput.value.trim();
        if (!userMessage) return;

        // Add user message
        const userChatLi = this.createChatElement(userMessage, "outgoing");
        this.chatbox.appendChild(userChatLi);
        this.chatInput.value = "";

        // Generate response
        setTimeout(() => {
            const response = this.findBestMatch(userMessage);
            const botChatLi = this.createChatElement(response, "incoming");
            this.chatbox.appendChild(botChatLi);
            this.chatbox.scrollTop = this.chatbox.scrollHeight;
        }, 600);
    }
}

// Initialize the chatbot when the page loads
document.addEventListener("DOMContentLoaded", () => {
    new BhagavadGitaChatbot();
});

// Function to toggle the chatbot's visibility
function toggleChatbot(show) {
    document.body.classList.toggle("show-chatbot", show);
}

// Open chatbot when the toggle button is clicked
document.querySelector(".chatbot-toggler").addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent the click from propagating to the document
    toggleChatbot(true);
});

// Close chatbot when clicking outside the chatbot container
document.addEventListener("click", (event) => {
    const chatbotContainer = document.querySelector(".chatbot");

    // Check if the clicked element is outside the chatbot
    if (!chatbotContainer.contains(event.target)) {
        toggleChatbot(false); // Close the chatbot
    }
});

// Prevent clicks inside the chatbot from closing it
document.querySelector(".chatbot").addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent the click from propagating to the document
});
