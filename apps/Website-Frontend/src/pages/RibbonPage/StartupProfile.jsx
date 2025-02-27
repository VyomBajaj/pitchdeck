import { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/NavBar/Footer';

const StartupProfile = () => {
    return (
        <>
            <NavBar />
            <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white flex flex-col justify-between">
                <div className="flex flex-col items-center py-12">
                    <h2 className="text-4xl font-extrabold text-white mb-8 text-center tracking-wide drop-shadow-lg">The Facebook</h2>

                    <div className="flex flex-col md:flex-row w-full max-w-7xl bg-white shadow-2xl rounded-2xl p-10 text-black transform hover:scale-105 transition-all duration-300">
                        {/* Video Section */}
                        <div className="w-full md:w-2/3 p-6 flex justify-center">
                            <video controls className="w-full h-auto rounded-2xl shadow-xl border border-gray-300">
                                <source src="/path-to-your-video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        {/* Description Section */}
                        <div className="w-full md:w-1/3 p-6 flex flex-col justify-center text-center md:text-left">
                            <h2 className="text-3xl font-bold text-blue-800 mb-4 flex justify-center">About Us</h2>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                This is a brief description of the startup. Explain the mission, goals, and how it aims to solve a particular problem.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Additional Description Section */}
                <div className="w-full max-w-7xl bg-white shadow-2xl rounded-2xl p-10 text-black mt-8 mx-auto transform hover:scale-105 transition-all duration-300">
                    <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">About Facebook</h2>
                    <p className="text-gray-700 text-lg leading-relaxed text-center">
                        Facebook is a social networking platform that allows users to connect, share, and communicate with friends, family, and colleagues.
                        It provides various features such as messaging, live streaming, business promotions, and social interactions.
                        Founded by Mark Zuckerberg in 2004, Facebook has grown into one of the most influential and widely used social platforms worldwide.
                        Facebook is a social media and social networking service owned by the American technology conglomerate Meta. Created in 2004 by Mark Zuckerberg with four other Harvard College students and roommates, Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes, its name derives from the face book directories often given to American university students. Membership was initially limited to Harvard students, gradually expanding to other North American universities. Since 2006, Facebook allows everyone to register from 13 years old, except in the case of a handful of nations, where the age requirement is 14 years.[6] As of December 2023, Facebook claimed almost 3.07 billion monthly active users worldwide.[7] As of November 2024, Facebook ranked as the third-most-visited website in the world, with 23% of its traffic coming from the United States.[8] It was the most downloaded mobile app of the 2010s.[9]

                        Facebook can be accessed from devices with Internet connectivity, such as personal computers, tablets and smartphones. After registering, users can create a profile revealing personal information about themselves. They can post text, photos and multimedia which are shared with any other users who have agreed to be their friend or, with different privacy settings, publicly. Users can also communicate directly with each other with Messenger, edit messages (within 15 minutes after sending),[10][11] join common-interest groups, and receive notifications on the activities of their Facebook friends and the pages they follow.

                        The subject of numerous controversies and lawsuits, Facebook has often been criticized over issues such as user privacy (as with the Cambridge Analytica data scandal), political manipulation (as with the 2016 U.S. elections) and mass surveillance.[12] The company has also been subject to criticism over its psychological effects such as addiction and low self-esteem, and over content such as fake news, conspiracy theories, copyright infringement, and hate speech.[13] Commentators have accused Facebook of willingly facilitating the spread of such content, as well as exaggerating its number of users to appeal to advertisers.[14]

                        History
                        Main article: History of Facebook
                        The history of Facebook traces its growth from a college networking site to a global social networking service.[15]


                        Mark Zuckerberg, co-creator of Facebook, in his Harvard dorm room, November 2005
                        Mark Zuckerberg built a website called "Facemash" in 2003 while attending Harvard University. The site was comparable to Hot or Not and used photos from online face books, asking users to choose the 'hotter' person".[16] Zuckerberg was reported and faced expulsion, but the charges were dropped.[16]

                        A "face book" is a student directory featuring photos and personal information. In January 2004, Zuckerberg coded a new site known as "TheFacebook", stating, "It is clear that the technology needed to create a centralized Website is readily available ... the benefits are many." Zuckerberg met with Harvard student Eduardo Saverin, and each agreed to invest $1,000.[17] On February 4, 2004, Zuckerberg launched "TheFacebook".[18]

                        Membership was initially restricted to students of Harvard College. Dustin Moskovitz, Andrew McCollum, and Chris Hughes joined Zuckerberg to help manage the growth of the site.[19] It became available successively to most universities in the US and Canada.[20][21] In 2004, Napster co-founder Sean Parker became company president[22] and the company moved to Palo Alto, California.[23] PayPal co-founder Peter Thiel gave Facebook its first investment.[24][25] In 2005, the company dropped "the" from its name after purchasing the domain name Facebook.com.[26]

                        In 2006, Facebook opened to everyone at least 13 years old with a valid email address.[27][28][29] Facebook introduced key features like the News Feed, which became central to user engagement. By late 2007, Facebook had 100,000 pages on which companies promoted themselves.[30] Facebook had surpassed MySpace in global traffic and became the world's most popular social media platform. Microsoft announced that it had purchased a 1.6% share of Facebook for $240 million ($364 million in 2024 dollars[31]), giving Facebook an implied value of around $15 billion ($22.7 billion in 2024 dollars[31]). Facebook focused on generating revenue through targeted advertising based on user data, a model that drove its rapid financial growth. In 2012, Facebook went public with one of the largest IPOs in tech history. Acquisitions played a significant role in Facebook's dominance. In 2012, it purchased Instagram, followed by WhatsApp and Oculus VR in 2014, extending its influence beyond social networking into messaging and virtual reality.

                        The Facebook–Cambridge Analytica data scandal in 2018 revealed misuse of user data to influence elections, sparking global outcry and leading to regulatory fines and hearings. Facebook's role in global events, including its use in organizing movements like the Arab Spring and its impact on events like the Rohingya genocide in Myanmar, highlighted its dual nature as a tool for empowerment and harm. In 2021, Facebook rebranded as Meta, reflecting its shift toward building the "metaverse" and focusing on virtual reality and augmented reality technologies.

                        Features

                        This section does not cite any sources. Please help improve this section by adding citations to reliable sources. Unsourced material may be challenged and removed. (August 2024) (Learn how and when to remove this message)
                        Facebook posts can have an unlimited number of characters, with images and videos.

                        Users can "friend" users, both sides must agree to being friends. Posts can be changed to be seen by everyone (public), friends, people in a certain group (group) or by selected friends (private). Users can join groups. Groups are composed of persons with shared interests. For example, they might go to the same sporting club, live in the same suburb, have the same breed of pet or share a hobby. Posts posted in a group can be seen only by those in a group, unless set to public.

                        Users are able to buy, sell, and swap things on Facebook Marketplace or in a Buy, Swap and Sell group. Facebook users may advertise events, which can be offline, on a website other than Facebook, or on Facebook.
                    </p>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default StartupProfile;