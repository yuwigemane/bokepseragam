import {
    CalendarIcon,
    CubeIcon,
    DownloadIcon,
    LapTimerIcon,
    RocketIcon,
    Share1Icon,
} from "@radix-ui/react-icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata, ResolvingMetadata } from "next";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { humanDuration, humanSize } from "@/lib/utils";
import { SITENAME } from "@/lib/constants";
import Script from "next/script";

import { Button } from "@/components/ui/button";
import CopyButton from "@/components/copy-button";
import LikeButton from "@/components/like-button";
import Link from "next/link";
import MessageBox from "@/components/message-box";
import React from "react";
import SearchCardList from "@/components/search/search-list";
import doodstream from "@/lib/doodstream";

type PageProps = {
    params: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
    { params }: PageProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const data = await doodstream.getFile({ file_code: params.id as string });
     const upstream = await doodstream.getUpstream();
    if (data.status !== 200) {
        return {
            title: data.msg,
            description: "Something went wrong. Please try again later.",
        };
    }

    const file = data.result[0];
    const title = `${file.title}`;
    const description = `${file.title} di ${SITENAME} Video Bokep Indo Jepang Jav Barat Simontok Viral Terbaru Bocil Ngentot Jilbab Smp Mama Sma`;
    const image = file.splash_img;
    const previousOgImages = (await parent).openGraph?.images || [];
    const previousTwImages = (await parent).twitter?.images || [];

    return {
        title,
        description,
        twitter: {
            title,
            description,
            images: [...previousTwImages, image],
        },
        openGraph: {
            title,
            description,
            images: [...previousOgImages, image],
            url: `/v/${file.filecode}`,
            type: `article`,
        },
        alternates: {
            canonical: `/v/${file.filecode}`,
        },
    };
}

export default async function Video({ params }: PageProps) {
    const data = await doodstream.getFile({ file_code: params.id as string });
    const upstream = await doodstream.getUpstream();

    if (data.status !== 200) {
        return (
            <MessageBox title={data.msg} countdown={30} variant="error">
                <p className="text-center">
                    Something went wrong. Please try again later.
                </p>
            </MessageBox>
        );
    }

    const file = data.result[0];
        const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: `${file.title}`,
        image: file.splash_img,
        description: `${file.title} di ${SITENAME} Video Bokep Indo Jepang Jav Barat Simontok Viral Terbaru Bocil Ngentot Jilbab Smp Mama Sma`,
        url: `https://bokepgb.pages.dev/v/${file.filecode}`,
        datePublished: new Date(
            file.uploaded + ".000Z"
        ).toISOString(),
        publisher: {
            '@type': 'Organization',
            name: `${SITENAME}`,
            logo: 'https://bokepgb.pages.dev/favicon.ico'},
            author: {
                '@type': 'Person',
                name: 'admin',
                url: 'https://bokepgb.pages.dev'
              }
        }
    return (
        <div className="grid col-span-full gap-4 md:gap-4 md:mx-10">
        <section>
        {/* Add JSON-LD to your page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* ... */}
        </section>
            <iframe
                className="w-full h-[30vh] md:h-[55vh] lg:h-[70vh]"
                src={`https://doodstream.com/e/${file.filecode}`}
                scrolling="no"
                title={file.title}
                frameBorder={0}
                allowFullScreen={true}
            ></iframe>
            <Card className="mx-2 mb-8">
                <CardHeader>
                    <CardTitle className="text-xl md:text-3xl font-bold">
                        {file.title}
                    </CardTitle>
                </CardHeader>
            <p>{file.title} di {SITENAME} Video Bokep Indo Jepang Jav Barat Simontok Viral Terbaru Bocil Ngentot Jilbab Smp Mama Sma hub sotwe olmek avtube pijat pure gudang pemerkosaan rumah tobrut inggris ngintip vcs binor yandex update remaja {SITENAME} wiki raja bokeptube full porno bokepmama simontok {file.title} playbokep indobokep xpanasonline indoh janda streaming jepang barat korea japan jav cina japanese china rusia arab india thailand hd anime hentai bokepind gudang avtub pijat sotwe rumah pemerkosaan inggris xpanas pure tobrut vcs ngintip binor {SITENAME} remaja yandex update perselingkuhan wiki raja full com porno indoh Hotbabes Big Tits Family Freeporn Ass Naked Celebs Nude Cam Hot Videos Fucking Free Porno Adult Movies Mom Freesex Nudelive Cams Women Stepmom Hotwife Bigtits Melons Tube Huge Tits Pornos Film x Titshits Pornofilme Nice Natural Fuq Girls Teen Sex Pornstars Tube Dick Jihad</p>
            </Card>
            <h2 className="text-2xl font-bold text-center my-4">
                Related Video {file.title}
            </h2>
            <SearchCardList query={file.title.split(" ")[2]} />
<Script src="https://js.juicyads.com/jp.php?c=947403z2v256s2x2x294z2b4&u=http%3A%2F%2Fwww.juicyads.rocks"/>
        </div>
    );
}
